import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const data = req.body || {};

    const {
      salutation,
      firstName,
      infix,
      lastName,
      country,
      city,
      phone,
      email,
      foodOptions,
      affiliation,
      accompanyingNames,
      needSeparateInvoiceForAccompanying,
      needInvoiceForBankTransfer,
      invoice,
      ticket,
    } = data;

    // Required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !country ||
      !city ||
      !affiliation ||
      !ticket?.category ||
      !ticket?.membership ||
      !ticket?.feePeriod ||
      !ticket?.subtotalEUR
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: (process.env.GMAIL_APP_PASSWORD || "").replace(/\s/g, ""),
      },
    });

    // Destination email (Registration)
    const toEmail = process.env.MAIL_TO_REGISTRATION;

    if (!toEmail) {
      return res.status(500).json({ error: "MAIL_TO_REGISTRATION is not set" });
    }

    const subject = `REGISTRATION (JIF 2026) — ${ticket.category} — ${ticket.membership} — ${ticket.feePeriod}`;

    const text =
      `NEW REGISTRATION SUBMISSION\n\n` +
      `PERSONAL DATA\n` +
      `Salutation: ${salutation || "-"}\n` +
      `First name: ${firstName}\n` +
      `Infix: ${infix || "-"}\n` +
      `Last name: ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "-"}\n` +
      `Affiliation: ${affiliation}\n` +
      `Country: ${country}\n` +
      `City: ${city}\n` +
      `Food options: ${foodOptions || "-"}\n` +
      `Accompanying names: ${accompanyingNames || "-"}\n\n` +
      `INVOICE REQUESTS\n` +
      `Separate invoice for accompanying persons: ${
        needSeparateInvoiceForAccompanying ? "YES" : "NO"
      }\n` +
      `Invoice for bank transfer payments: ${
        needInvoiceForBankTransfer ? "YES" : "NO"
      }\n\n` +
      `TICKET\n` +
      `Category: ${ticket.category}\n` +
      `Membership: ${ticket.membership}\n` +
      `Fee period: ${ticket.feePeriod}\n` +
      `Subtotal (EUR): ${ticket.subtotalEUR}\n\n` +
      `VAT INVOICE DATA\n` +
      `Institution: ${invoice?.instName || "-"}\n` +
      `Street: ${invoice?.street || "-"}\n` +
      `House number: ${invoice?.houseNumber || "-"}\n` +
      `Postal code: ${invoice?.postalCode || "-"}\n` +
      `City: ${invoice?.instCity || "-"}\n` +
      `VAT/Tax ID: ${invoice?.vatId || "-"}\n`;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: toEmail,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Registration API error:", err);
    return res.status(500).json({ error: "Email send failed" });
  }
}
