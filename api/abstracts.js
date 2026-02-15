import Busboy from "busboy";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const bb = Busboy({ headers: req.headers });

  const fields = {};
  let fileBuffer = null;
  let fileName = null;
  let fileMime = null;

  bb.on("field", (name, val) => {
    fields[name] = val;
  });

  bb.on("file", (_name, file, info) => {
    const { filename, mimeType } = info;
    fileName = filename;
    fileMime = mimeType;

    const chunks = [];
    file.on("data", (d) => chunks.push(d));
    file.on("end", () => {
      fileBuffer = Buffer.concat(chunks);
    });
  });

  bb.on("finish", async () => {
    try {
      const { firstName, lastName, email, presentationType, topic } = fields;

      if (!firstName || !lastName || !email || !presentationType || !topic) {
        return res.status(400).json({ error: "Missing fields" });
      }

      if (!fileBuffer || !fileName) {
        return res.status(400).json({ error: "Missing file" });
      }

      const lower = fileName.toLowerCase();
      if (!lower.endsWith(".doc") && !lower.endsWith(".docx")) {
        return res.status(400).json({ error: "Invalid file type" });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: (process.env.GMAIL_APP_PASSWORD || "").replace(/\s/g, ""),
        },
      });

      const subject = `Abstract submission (JIF 2026) — ${presentationType} — ${topic}`;

      const text =
        `New abstract submission\n\n` +
        `First name: ${firstName}\n` +
        `Last name: ${lastName}\n` +
        `Email: ${email}\n` +
        `Presentation type: ${presentationType}\n` +
        `Topic: ${topic}\n\n` +
        `Attached file: ${fileName}\n`;

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.MAIL_TO,
        subject,
        text,
        attachments: [
          {
            filename: fileName,
            content: fileBuffer,
            contentType: fileMime || "application/octet-stream",
          },
        ],
      });

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Email send failed" });
    }
  });

  req.pipe(bb);
}

