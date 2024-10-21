"use server";

import { ContactEmail } from "@/components";
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
  const result = await resend.emails.send({
    from: `${process.env.NEXT_PUBLIC_DOMAIN} <${process.env.ORIGIN_EMAIL}>`,
    to: [validatedFields.data.email, process.env.REDIRECT_EMAIL!],
    subject: validatedFields.data.subject,
    react: ContactEmail(validatedFields.data),
  });

  if (!result.error) return { status: "success" };

  console.error("Error sending email", result.error);
  return { status: "error", error: "Could not send email" };
}
