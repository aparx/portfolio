"use client";
import { Button, TextFont } from "@/components";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { MdArrowDownward, MdEmail, MdPhone } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { GridBox } from "../../_components";
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
