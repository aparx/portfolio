"use client";
import { Button, TextFont } from "@/components";
import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef, InputHTMLAttributes, useId } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuContact } from "react-icons/lu";
import { MdEmail, MdPhone } from "react-icons/md";
import { GridBox } from "../../_components";
import { saveContactForm } from "../../actions";
import { contactFormSchema } from "../../schemas";
import css from "./contactBox.module.css";

export function ContactBox() {
  const t = useTranslations("index");

  return (
    <GridBox.Root type="stretch" className={css.root}>
      <div>
        <GridBox.Header
          title={t("Contact.title")}
          subtitle={t("Contact.subtitle")}
        />
        <footer>
          <ul aria-label="Contact possibilities elsewhere">
            <TextFont asChild type="mono">
              <li>
                <MdPhone />
                <p>+49 01573 8947352</p>
              </li>
            </TextFont>
            <li>
              <MdEmail />
              <p>contact@vizeb.dev</p>
            </li>
          </ul>
        </footer>
      </div>
      <section>
        <h5>
          <LuContact />
          portfolio/contactForm.tsx
        </h5>
        <Form />
      </section>
    </GridBox.Root>
  );
}

function Form() {
  const t = useTranslations("index.Contact");
  const shape = contactFormSchema.shape;
  const [state, formAction] = useFormState(saveContactForm, null);
  const hasSubmitted = state?.status === "success";

  return (
    <form action={formAction}>
      {hasSubmitted && (
        <p aria-live="polite" className={css.submitConfirmation}>
          <div>
            <IoMdCheckmarkCircleOutline />
            Thanks for contacting me.
          </div>
          <div>I will come back to you as fast as possible.</div>
          <div>A copy was sent to your inbox.</div>
        </p>
      )}
      <Field
        as="input"
        type="text"
        name="email"
        label={t("fields.email.label")}
        placeholder={t("fields.email.placeholder")}
        error={state?.fieldErrors?.email}
        defaultValue={state?.fieldValues?.email || "undestroy1310@gmail.com"}
        minLength={shape.email.minLength ?? undefined}
        maxLength={shape.email.maxLength ?? undefined}
        required={!shape.subject.isOptional()}
        disabled={hasSubmitted}
        aria-hidden={hasSubmitted}
      />
      <Field
        as="input"
        type="text"
        name="subject"
        label={t("fields.subject.label")}
        placeholder={t("fields.subject.placeholder")}
        error={state?.fieldErrors?.subject}
        defaultValue={state?.fieldValues?.subject || "Kostenvoranschlag"}
        minLength={shape.subject.minLength ?? undefined}
        maxLength={shape.subject.maxLength ?? undefined}
        required={!shape.subject.isOptional()}
        disabled={hasSubmitted}
      />
      <Field
        as="textarea"
        name="body"
        label={t("fields.details.label")}
        placeholder={t("fields.details.placeholder")}
        error={state?.fieldErrors?.body}
        defaultValue={
          state?.fieldValues?.body ||
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
        }
        minLength={shape.body.minLength ?? undefined}
        maxLength={shape.body.maxLength ?? undefined}
        required={!shape.subject.isOptional()}
        disabled={hasSubmitted}
      />
      <footer>
        <Submit disabled={hasSubmitted} />
      </footer>
    </form>
  );
}

function Submit({
  disabled,
  ...restProps
}: Omit<ComponentPropsWithoutRef<"button">, "type">) {
  const t = useTranslations("index.Contact");
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      appearance="cta"
      disabled={disabled || pending}
      {...restProps}
    >
      {t("submit")}
    </Button>
  );
}

function Field({
  as: Component,
  label,
  error,
  disabled,
  ...restProps
}: Omit<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  "children"
> & {
  as: "input" | "textarea";
  label: React.ReactNode;
  error?: string | string[] | null;
}) {
  const { pending } = useFormStatus();

  return (
    <Label label={label} error={error}>
      {({ errorId }) => (
        <Component
          {...restProps}
          disabled={disabled || pending}
          aria-invalid={errorId != null}
          aria-errormessage={errorId}
        />
      )}
    </Label>
  );
}

function Label({
  label,
  children,
  error,
}: Readonly<{
  label: React.ReactNode;
  children: (props: { errorId: string | undefined }) => JSX.Element;
  error?: string | string[] | null;
}>) {
  const errorString = Array.isArray(error)
    ? error.join(" ").trim()
    : error?.trim();
  const hasError = Boolean(errorString?.length);
  const errorId = useId();
  const Children = children;

  return (
    <label data-invalid={hasError}>
      <div>
        <strong>{label}</strong>
        {hasError && (
          <p id={errorId} aria-live="assertive">
            {errorString}
          </p>
        )}
      </div>
      <Children errorId={hasError ? errorId : undefined} />
    </label>
  );
}
