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
    <main className={css.container}>
      <IntroBox />
      <div className={css.grid}>
        <FrontendBox />
        <BackendBox />
        <SkillsBox />
        <PassionBox />
        <ScaleBox />
        <ProjectsBox />
        <ContactBox />
      </div>
    </main>
  );
}
