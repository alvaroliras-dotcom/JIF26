import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const data = req.body || {};
    const {
      firstName,
      lastName,
      email,
      affiliation,
      country,
      category,
      membership,
      feePeriod,
      subtotalEUR,
      needInvoice,
      invoice,
    } = data;

    if (!firstName || !lastName || !email || !affiliation || !country || !category || !membership || !feePeriod) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: (process.env.GMAIL_APP_PASSWORD || "").replace(/\s/g, ""),
      },
    });

    // 1) Email to Secretariat
    const subjectSecretariat = `Registration submission (JIF 2026) — ${category} — ${membership}`;

    const textSecretariat =
      `New registration submission\n\n` +
      `First name: ${firstName}\n` +
      `Last name: ${lastName}\n` +
      `Email: ${email}\n` +
      `Affiliation: ${affiliation}\n` +
      `Country: ${country}\n\n` +
      `Category: ${category}\n` +
      `Membership: ${membership}\n` +
      `Fee period: ${feePeriod}\n` +
      `Subtotal (EUR): ${subtotalEUR}\n\n` +
      `Invoice requested: ${needInvoice ? "YES" : "NO"}\n` +
      (needInvoice && invoice
        ? `\nInvoice details:\n` +
          `- Name/Company: ${invoice.invoiceName || "-"}\n` +
          `- VAT ID: ${invoice.vatId || "-"}\n` +
          `- Address: ${invoice.invoiceAddress || "-"}\n` +
          `- City: ${invoice.invoiceCity || "-"}\n` +
          `- ZIP: ${invoice.invoiceZip || "-"}\n` +
          `- Country: ${invoice.invoiceCountry || "-"}\n`
        : "");

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.MAIL_TO,
      subject: subjectSecretariat,
      text: textSecretariat,
    });

    // 2) Auto-reply to Author
    const subjectAuthor = "Confirmation: Registration received (JIF 2026)";

    const textAuthor =
      `Dear ${firstName} ${lastName},\n\n` +
      `We confirm that we have received your registration submission for JIF 2026.\n\n` +
      `Summary:\n` +
      `- Category: ${category}\n` +
      `- Membership: ${membership}\n` +
      `- Fee period: ${feePeriod}\n` +
      `- Subtotal: ${subtotalEUR} €\n\n` +
      `Important: registration becomes effective after payment.\n` +
      `If you want to speed up the process, you may email your payment receipt to: ${process.env.MAIL_TO}\n\n` +
      `Best regards,\n` +
      `JIF 2026 Technical Secretariat`;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: subjectAuthor,
      text: textAuthor,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ error: "Email send failed" });
  }
}

