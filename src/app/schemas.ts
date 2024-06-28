import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email().max(100),
  subject: z.string().min(3).max(100),
  body: z.string().min(20).max(500),
});
