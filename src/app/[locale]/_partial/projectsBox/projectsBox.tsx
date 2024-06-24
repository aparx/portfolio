import portfolioPreviewImage from "@/../public/projects/portfolio.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MdWorkHistory } from "react-icons/md";
import { GridBox } from "../../_components";
import css from "./projectsBox.module.css";

export interface ProjectData {
  title: string;
  description: string;
  href?: string;
}

export function ProjectsBox() {
  const t = useTranslations("index");

  return (
    <GridBox.Root type="stretch" className={css.root}>
      <GridBox.Header
        title={t("Projects.title")}
        subtitle={t("Projects.subtitle")}
        intro={t("Projects.intro")}
        icon={<MdWorkHistory />}
      />
      <ul aria-label="Projects I worked on" className={css.projectList}>
        <li>
          <Project
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            href="https://google.com/"
          />
        </li>
        <li>
          <Project
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            href="https://google.com/"
          />
        </li>
        <li>
          <Project
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            href="https://google.com/"
          />
        </li>
        <li>
          <Project
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            href="https://google.com/"
          />
        </li>
      </ul>
    </GridBox.Root>
  );
}

function Project({ title, description, href }: ProjectData) {
  return (
    <article className={css.project}>
      <header aria-hidden>
        <Image
          src={portfolioPreviewImage}
          alt="Preview Image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        <div />
      </header>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
}
