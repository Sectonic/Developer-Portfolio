import { ServerClient } from "postmark";

const client = new ServerClient(process.env.EMAIL_SERVER_TOKEN);

export default async function handler(req, res) {

  const { token, name, email, message } = req.body;

  const verificationUrl = "https://www.google.com/recaptcha/api/siteverify?" + 
      new URLSearchParams( { secret: process.env.RECAPTCHA_SERVER_KEY, response: token });
  const verificationResponse = await fetch(verificationUrl, { method: "POST" });
  const verificationResult = await verificationResponse.json();

  if (verificationResult.score < .5) {
      res.status(200).json({ status: "bot" });
      return;
  }

  const emailResponse = await client.sendEmail({
    From: "Contact Form <noreply@sujaldhakal.dev>",
    To: "hello@sujaldhakal.dev",
    Subject: "Portfolio message from " + name,
    TextBody: `Email: ${email}\nMessage: ${message}`,
    HTMLBody: `<html><body><strong>Email: </strong>${email}<br/><strong>Message: </strong>${message}</body></html>`,
    MessageStream: "outbound"
  });

  res.status(200).json({ status: emailResponse.ErrorCode == 0 ? 'success' : 'error' });
}
