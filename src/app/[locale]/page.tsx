import databaseImage from "@/../public/grid/database.svg";
import editorImage from "@/../public/grid/editor.svg";
import fullstackImage from "@/../public/grid/fullstack.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { GridBox, IntroBox } from "./_components";
import css from "./page.module.css";

export default function Home() {
  const t = useTranslations("index");

  return (
    <>
      <div className={css.background} />
      <div className={css.container}>
        <IntroBox />
        <main className={css.grid}>
          <ServiceRow />
          <GridBox.Root type="stretch">
            <GridBox.Header
              title={t("Languages.title")}
              subtitle={t("Languages.subtitle", {
                name: "Web Architektur",
              })}
              intro={t("Languages.intro")}
            />
          </GridBox.Root>
          <GridBox.Root type="split" side="start">
            <GridBox.Header
              title={t("Passion.title")}
              subtitle={t("Passion.subtitle")}
              intro={
                <>
                  <MdVerified />
                  {t("Passion.intro")}
                </>
              }
            />
            <div className={css.boxImageContainer}>
              <Image
                fill
                src={editorImage}
                alt="An editor showing issues being fixed, done with passion"
                style={{ objectFit: "contain" }}
              />
            </div>
          </GridBox.Root>
          <GridBox.Root type="split" side="end">
            <GridBox.Header
              title={t("Scale.title")}
              subtitle={t("Scale.subtitle")}
              intro={
                <>
                  <FaArrowTrendUp />
                  {t("Scale.intro")}
                </>
              }
            />
          </GridBox.Root>
          <GridBox.Root type="stretch">Projects</GridBox.Root>
          <GridBox.Root type="stretch" style={{ borderBottom: "unset" }}>
            Get in touch
          </GridBox.Root>
        </main>
      </div>
    </>
  );
}

function ServiceRow() {
  const t = useTranslations("index");

  return (
    <>
      <GridBox.Root type="split" side="start" style={{ borderTop: "unset" }}>
        <GridBox.Header
          title={t("Frontend.title")}
          subtitle={t("Frontend.subtitle")}
          intro={t("Frontend.intro")}
        />
        <div className={css.boxImageContainer}>
          <Image
            fill
            src={fullstackImage}
            alt="The same webapp opened on both a phone and desktop"
            style={{ objectFit: "contain" }}
          />
        </div>
      </GridBox.Root>
      <GridBox.Root type="split" side="end" style={{ borderTop: "unset" }}>
        <GridBox.Header
          title={t("Backend.title")}
          subtitle={t("Backend.subtitle")}
          intro={t("Backend.intro")}
        />
        <div className={css.boxImageContainer}>
          <Image
            fill
            src={databaseImage}
            alt="Database table showing many entries"
            style={{ objectFit: "contain" }}
          />
        </div>
      </GridBox.Root>
    </>
  );
}
