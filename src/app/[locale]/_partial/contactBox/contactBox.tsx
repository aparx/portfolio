import { Button } from "@/components";
import { useTranslations } from "next-intl";
import { LuContact } from "react-icons/lu";
import { GridBox } from "../../_components";
import css from "./contactBox.module.css";

export function ContactBox() {
  const t = useTranslations("index");

  return (
    <GridBox.Root type="stretch" className={css.root}>
      <GridBox.Header
        title={t("Contact.title")}
        subtitle={t("Contact.subtitle")}
      />
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
      <label>
        {t("fields.email.label")}
        <input
          type="text"
          placeholder={t("fields.email.placeholder")}
          pattern="[\w-\.]+@([\w-]+\.)+[\w-]{2,4}"
          required
        />
      </label>
      <label>
        {t("fields.subject.label")}
        <input
          type="text"
          placeholder={t("fields.subject.placeholder")}
          required
        />
      </label>
      <label>
        {t("fields.details.label")}
        <textarea placeholder={t("fields.details.placeholder")} required />
      </label>
      <footer>
        <Button type="submit" appearance="cta" disabled>
          {t("submit")}
        </Button>
      </footer>
    </form>
  );
}
