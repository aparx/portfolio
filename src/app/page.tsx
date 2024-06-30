import databaseImage from "@/../public/grid/database.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BsDatabase } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GridBox } from "./_components";
import {
  ContactBox,
  FrontendBox,
  IntroBox,
  PassionBox,
  ProjectsBox,
  SkillsBox,
} from "./_partial";
import css from "./page.module.css";

export default function Home() {
  const t = useTranslations("index");

  return (
    <>
      <div className={css.container}>
        <IntroBox />
        <main className={css.grid}>
          <ServiceRow />
          <SkillsBox />
          <PassionBox />
          <GridBox.Root type="split" side="end">
            <GridBox.Header
              title={t("Scale.title")}
              subtitle={t("Scale.subtitle")}
              icon={<FaArrowTrendUp />}
              intro={t("Scale.intro")}
            />
          </GridBox.Root>
          <ProjectsBox />
          <ContactBox />
        </main>
      </div>
    </>
  );
}

function ServiceRow() {
  const t = useTranslations("index");

  return (
    <>
      <FrontendBox />
      <GridBox.Root type="split" side="end" style={{ borderTop: "unset" }}>
        <GridBox.Header
          title={t("Backend.title")}
          subtitle={t("Backend.subtitle")}
          intro={t("Backend.intro")}
          icon={<BsDatabase />}
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
