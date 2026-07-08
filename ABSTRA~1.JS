import Busboy from "busboy";
import nodemailer from "nodemailer";

export const config = {
  api: { bodyParser: false },
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
      const {
        firstName,
        lastName,
        email,
        presentationType,
        topic,
        _next
      } = fields;

      // Validate required fields
      if (!firstName || !lastName || !email || !presentationType || !topic) {
        return res.status(400).send("Missing required fields");
      }

      // Validate file upload
      if (!fileBuffer || !fileName) {
        return res.status(400).send("Missing file");
      }

      const lower = fileName.toLowerCase();
      if (!lower.endsWith(".doc") && !lower.endsWith(".docx")) {
        return res.status(400).send("Invalid file type. Only .doc and .docx allowed.");
      }

      // Create mail transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: (process.env.GMAIL_APP_PASSWORD || "").replace(/\s/g, ""),
        },
      });

      // EMAIL 1: Send to Secretariat (MAIL_TO)
      const subjectSecretariat = `Abstract submission (JIF 2026) — ${presentationType} — ${topic}`;

      const textSecretariat =
        `New abstract submission received\n\n` +
        `First name: ${firstName}\n` +
        `Last name: ${lastName}\n` +
        `Email: ${email}\n` +
        `Presentation type: ${presentationType}\n` +
        `Topic: ${topic}\n\n` +
        `Attached file: ${fileName}\n`;

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.MAIL_TO,
        subject: subjectSecretariat,
        text: textSecretariat,
        attachments: [
          {
            filename: fileName,
            content: fileBuffer,
            contentType: fileMime || "application/octet-stream",
          },
        ],
      });

      // EMAIL 2: Auto-reply to the author
      const subjectAuthor = "Confirmation: Abstract submission received (JIF 2026)";

      const textAuthor =
        `Dear ${firstName} ${lastName},\n\n` +
        `We confirm that we have successfully received your abstract submission for the IX Jornadas Ibéricas de Fotoquímica (JIF 2026).\n\n` +
        `Submission details:\n` +
        `- Presentation type: ${presentationType}\n` +
        `- Topic: ${topic}\n` +
        `- File received: ${fileName}\n\n` +
        `If you do not receive further communication, or if you need to correct your submission, please contact the Technical Secretariat at:\n` +
        `${process.env.MAIL_TO}\n\n` +
        `Best regards,\n` +
        `JIF 2026 Technical Secretariat`;

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: subjectAuthor,
        text: textAuthor,
      });

      // Redirect back to website success page
      if (_next) {
        res.writeHead(303, { Location: _next });
        return res.end();
      }

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("Abstract submission error:", err);
      return res.status(500).send("Email send failed");
    }
  });

  req.pipe(bb);
}
