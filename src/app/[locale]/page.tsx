import databaseImage from "@/../public/grid/database.png";
import editorImage from "@/../public/grid/editor.png";
import fullstackImage from "@/../public/grid/fullstack.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { GridBox } from "./_components";
import { IntroBox, ProjectsBox, SkillsBox } from "./_partial";
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
          <SkillsBox />
          <GridBox.Root type="split" side="start">
            <GridBox.Header
              title={t("Passion.title")}
              subtitle={t("Passion.subtitle")}
              icon={<MdVerified />}
              intro={t("Passion.intro")}
            />
            <div className={css.boxImageContainer}>
              <Image
                fill
                src={editorImage}
                alt="An editor showing issues being fixed, done with passion"
                style={{ objectFit: "contain" }}
                quality={100}
              />
            </div>
          </GridBox.Root>
          <GridBox.Root type="split" side="end">
            <GridBox.Header
              title={t("Scale.title")}
              subtitle={t("Scale.subtitle")}
              icon={<FaArrowTrendUp />}
              intro={t("Scale.intro")}
            />
          </GridBox.Root>
          <ProjectsBox />
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
            quality={100}
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
            quality={100}
          />
        </div>
      </GridBox.Root>
    </>
  );
}
