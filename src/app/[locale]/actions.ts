"use server";

import { ContactEmail } from "@/components";
import { nonNull } from "@/utils";
import { Resend } from "resend";
import { contactFormSchema } from "./schemas";

export async function saveContactForm(lastState: any, formData: FormData) {
  const inputFields = {
    email: formData.get("email")?.toString(),
    subject: formData.get("subject")?.toString(),
    body: formData.get("body")?.toString(),
  };
  const validatedFields = contactFormSchema.safeParse(inputFields);
  if (!validatedFields.success)
    return {
      status: "error",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      fieldValues: inputFields,
    } as const;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = await Promise.all([
    await resend.emails.send({
      from: `Vinzent <${process.env.ORIGIN_EMAIL}>`,
      to: validatedFields.data.email,
      subject: "Thank you for contacting me.",
      react: ContactEmail(validatedFields.data),
    }),
    await resend.emails.send({
      from: `noreply <${process.env.ORIGIN_EMAIL}>`,
      to: process.env.REDIRECT_EMAIL!,
      subject: `Contact Form: ${validatedFields.data.subject}`,
      react: ContactEmail({ ...validatedFields.data, includeEmail: true }),
    }),
  ]);

  const errors = result.map((x) => x.error).filter(nonNull);
  if (errors.length !== 0) {
    console.error("Error sending email", errors);
    return { status: "error", error: "Could not send email" };
  }
  return { status: "success" };
}
