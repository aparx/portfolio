import { contactFormSchema } from "@/app/schemas";
import { z } from "zod";

export type ContactEmailProps = Readonly<
  Partial<z.infer<typeof contactFormSchema>>
> & {
  includeEmail?: boolean;
};

const COLORS = {
  primary: "#64b5e2",
  accent: ["#000000", "#0c0c0c", "#131313", "#404040"],
  emphasis: {
    high: "rgb(230, 230, 230)",
    medium: "rgba(230, 230, 230, 0.8)",
  },
} as const;

const SPACING = [5, 10, 15, 30, 40] as const;

export function ContactEmail({ email, subject, body }: ContactEmailProps) {
  return (
    <div
      style={{
        textAlign: "center",
        color: COLORS.emphasis.high,
        margin: "auto",
        padding: SPACING[4],
        background: COLORS.accent[1],
        borderRadius: SPACING[1],
        width: 500,
      }}
    >
      <h1>Thanks for contacting me.</h1>
      <h2>I will come back to you as fast as possible.</h2>
      <div
        style={{
          marginTop: SPACING[4],
          border: `1px solid ${COLORS.accent[3]}`,
          textAlign: "left",
        }}
      >
        {email && <Field label="Email" value={email} />}
        {subject && <Field label="Subject" value={subject} />}
        {body && <Field label="Body" value={body} />}
      </div>
      <div
        style={{
          textAlign: "left",
          color: COLORS.emphasis.medium,
          marginTop: SPACING[4],
          width: "100%",
        }}
      >
        <p>Please do not reply to this email.</p>
        Sincerly, <strong>Vinzent</strong>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ padding: `${SPACING[2]}px ${SPACING[3]}px` }}>
      <h3>{label}</h3>
      <p style={{ color: COLORS.emphasis.medium }}>{value}</p>
    </div>
  );
}
