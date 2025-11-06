import nodemailer from "nodemailer";
import { environ } from "./env.js";
import ejs from "ejs";
import fs from "fs";
import path from "path";

const transporter = nodemailer.createTransport({
  host: environ.SMTP_HOST,
  port: parseInt(environ.SMTP_PORT),
  auth: {
    user: environ.SMTP_USER,
    pass: environ.SMTP_PASS,
  },
});

const renderTemplate = async (templateName, data) => {
  const templatePath = path.join(
    import.meta.dirname,
    "..",
    "..",
    "templates",
    "email",
    `${templateName}.ejs`
  );
  const template = fs.readFileSync(templatePath, "utf-8");
  return ejs.render(template, data);
};

const sendEmail = async (templateName, to, data) => {
  const html = await renderTemplate(templateName, data);
  let subject;
  if (templateName === "verifyEmail")
    subject = "Verify Email Address to Activate your Account";
  else if (templateName === "welcome") subject = "Welcome to Transcendence 🏓";
  await transporter.sendMail({
    from: environ.MAIL_SENDER,
    to,
    subject,
    html,
  });
};

export default {
  sendEmail,
};
