import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,  //SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // send from your email
      to: process.env.EMAIL_USER,                         // where you receive it
      replyTo: email,                                     // you can reply directly to sender
      subject: `New message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('CONTACT API ERROR:', error);
    return res.status(500).json({ message: 'Error sending email.' });
  }
}



