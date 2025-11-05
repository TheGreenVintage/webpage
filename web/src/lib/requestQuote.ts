"use server";

import { nl } from "@/lib/navigation";
import { redirect } from "next/navigation";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { Locale } from "./locale";

const reportBot = async (reason: string, subject: string) => {
  const body = JSON.stringify({
    name: "Bot Detected",
    url: "https://www.thegreenvintage.com",
    domain: "thegreenvintage.com",
    reason,
    subject,
  });

  fetch("https://stats.thegreenvintage.com/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
};

export async function requestQuote(formData: FormData) {
  const locale = formData.get("locale") as Locale;
  const n = nl(locale);

  const formGet = (name: string) => {
    const value = formData.get(name);

    if (value) {
      return value.toString();
    }

    return "No " + name;
  };

  // The bot didn't fill out the fields with key strokes
  if (formGet("ty") === "false") {
    const subject = formGet("subject").slice(0, 150);
    console.log(`Bot detected - Check 1: '${subject}...'`);

    await reportBot("check1", subject);

    return redirect(n("contact"));
  }

  // The bot filled out the honeypot hidden input
  if (Boolean(formData.get("message"))) {
    const subject = formGet("subject").slice(0, 150);
    console.log(`Bot detected - Check 2: '${subject}...'`);

    await reportBot("check2", subject);

    return redirect(n("contact"));
  }

  // Testing purposes
  if (formData.get("name")?.toString().includes("Bot")) {
    const subject = formGet("subject").slice(0, 150);
    console.log(`Bot detected - Check 3: '${subject}...'`);

    await reportBot("check3", subject);

    return redirect(n("contact"));
  }

  const rawFormData = {
    name: formGet("name"),
    phone: formGet("phone"),
    email: formGet("email"),
    subject: formGet("subject"),
    body: formGet("ignore"), // The name of the field is "ignore" to trick the bot
    locale: formGet("locale"),
  };

  console.log(rawFormData);

  const text = `
    Nom: ${rawFormData.name}
    Email: ${rawFormData.email}
    Telèfon: ${rawFormData.phone}
    Títol: ${rawFormData.subject}
    Missatge:
    ${rawFormData.body}

    Enviat des de: https://www.thegreenvintage.com
  `;

  const html = `
    <p>Nom: ${rawFormData.name}</p>
    <p>Email: ${rawFormData.email}</p>
    <p>Telèfon: ${rawFormData.phone}</p>
    <p>Títol: ${rawFormData.subject}</p>
    <p>Missatge:</p>
    <p>${rawFormData.body}</p>

    <p>Enviat des de: <a href="https://www.thegreenvintage.com">The Green Vintage Events</a></p>
  `;

  const from = `${rawFormData.name} <${rawFormData.email}>`;

  try {
    await sendMail(rawFormData.subject, from, text, html);

    console.log("Mail sent!!!!");
  } catch (error) {
    console.error(error);

    throw error;
  }

  redirect(n("contact_sent"));
}

async function sendMail(
  subject: string,
  from: string,
  text: string,
  html: string,
) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    timeout: 10000,
    key: process.env.MAILGUN_API_KEY ?? "empty-api-key",
  });

  return mg.messages.create(
    "sandboxcbfea99dc8204e3e9510b31627f9259f.mailgun.org",
    {
      from,
      to: "info@thegreenvintage.com",
      bcc: "fcsonline@gmail.com",
      subject,
      text,
      html,
    },
  );
}
