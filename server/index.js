const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));

app.post('/api/send-inquiry', async (req, res) => {
  try {
    const { to, subject, content, formData } = req.body;

    // Create transporter using SMTP environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || 'noreply@solarics.de',
      to: to || process.env.MAIL_TO || 'info@solarics.de',
      subject: subject || 'Neue Anfrage zur Heizungspumpe',
      text: content || JSON.stringify(formData, null, 2),
      html: `<pre style="font-family: monospace">${(content || JSON.stringify(formData, null, 2)).replace(/</g, '&lt;')}</pre>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error('Failed to send email', err);
    res.status(500).json({ success: false, error: err && err.message ? err.message : String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Inquiry server running on http://localhost:${PORT}`);
  console.log('Ensure you set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env');
});
