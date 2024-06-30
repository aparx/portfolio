import { useTranslations } from "next-intl";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GridBox } from "./_components";
import {
  BackendBox,
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
          <FrontendBox />
          <BackendBox />
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
