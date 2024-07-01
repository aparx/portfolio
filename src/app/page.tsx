import {
  BackendBox,
  ContactBox,
  FrontendBox,
  IntroBox,
  PassionBox,
  ProjectsBox,
  SkillsBox,
} from "./_partial";
import { ScaleBox } from "./_partial/scaleBox";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.container}>
      <IntroBox />
      <main className={css.grid}>
        <FrontendBox />
        <BackendBox />
        <SkillsBox />
        <PassionBox />
        <ScaleBox />
        <ProjectsBox />
        <ContactBox />
      </main>
    </div>
  );
}
