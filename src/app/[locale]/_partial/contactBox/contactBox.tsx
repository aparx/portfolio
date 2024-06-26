import { Button, TextFont } from "@/components";
import { useTranslations } from "next-intl";
import { InputHTMLAttributes, useId } from "react";
import { LuContact } from "react-icons/lu";
import { MdEmail, MdPhone } from "react-icons/md";
import { GridBox } from "../../_components";
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

  return (
    <form>
      <Field
        as="input"
        type="text"
        label={t("fields.email.label")}
        placeholder={t("fields.email.placeholder")}
        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        error="Need at least 20 characters"
        required
      />
      <Field
        as="input"
        type="text"
        label={t("fields.subject.label")}
        placeholder={t("fields.subject.placeholder")}
        required
      />
      <Field
        as="textarea"
        label={t("fields.details.label")}
        placeholder={t("fields.details.placeholder")}
        required
      />
      <footer>
        <Button type="submit" appearance="cta" disabled>
          {t("submit")}
        </Button>
      </footer>
    </form>
  );
}

function Field({
  as: Component,
  label,
  error,
  ...restProps
}: Omit<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  "children"
> & {
  as: "input" | "textarea";
  label: React.ReactNode;
  error?: string | string[] | null;
}) {
  return (
    <Label label={label} error={error}>
      {({ errorId }) => (
        <Component
          {...restProps}
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
