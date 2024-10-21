"use client";
import { Button, TextFont } from "@/components";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  useId,
  useState,
} from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdArrowDownward, MdEmail, MdPhone } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { GridBox } from "../../_components";
import { saveContactForm } from "../../actions";
import { contactFormSchema } from "../../schemas";
import css from "./contactBox.module.css";

export function ContactBox() {
  const t = useTranslations("index");
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const { ref } = useInView({
    onChange: (inView) => setShowFloatingButton(!inView),
  });

  return (
    <>
      <GridBox.Root type="stretch" className={css.root}>
        <div>
          <GridBox.Header
            title={t("Contact.title")}
            subtitle={t("Contact.subtitle")}
          />
          <footer>
            <ul aria-label="Contact possibilities elsewhere">
              {phone && (
                <TextFont asChild type="mono">
                  <li>
                    <Link href={`tel:${phone.replaceAll(/ /g, "")}`}>
                      <MdPhone aria-label="Phone" />
                      <address typeof="phone">{phone}</address>
                    </Link>
                  </li>
                </TextFont>
              )}
              {email && (
                <li>
                  <Link href={`mailto:${email}`}>
                    <MdEmail aria-label="Email" />
                    <address typeof="email">{email}</address>
                  </Link>
                </li>
              )}
            </ul>
          </footer>
        </div>
        <section ref={ref} id="contact" className={css.formContainer}>
          <h5>
            <VisuallyHidden>Contact Form</VisuallyHidden>
            <SiTypescript />
            <span aria-hidden>contactForm.tsx</span>
          </h5>
          {process.env.NEXT_PUBLIC_COMMISSIONS_OPENED === "true" ? (
            <Form />
          ) : (
            <div className={css.disabledForm}>
              <p>{t("Contact.disabled.reason")}</p>
              <p>{t("Contact.disabled.contact")}</p>
            </div>
          )}
        </section>
      </GridBox.Root>
      <Button
        asChild
        appearance="accent"
        className={css.floatButton}
        aria-hidden
        data-visible={showFloatingButton}
      >
        <Link href="#contact" style={{ textDecoration: "none" }}>
          {t("Contact.floating")}
          <MdArrowDownward />
        </Link>
      </Button>
    </>
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
        defaultValue={state?.fieldValues?.email}
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
        defaultValue={state?.fieldValues?.subject}
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
        defaultValue={state?.fieldValues?.body}
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
