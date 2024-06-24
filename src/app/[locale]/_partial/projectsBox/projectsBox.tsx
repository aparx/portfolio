import portfolioPreviewImage from "@/../public/projects/portfolio.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { MdWorkHistory } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { GridBox } from "../../_components";
import { ProjectData, useProjectsConfig } from "./projectsBox.config";
import css from "./projectsBox.module.css";

export function ProjectsBox() {
  const t = useTranslations("index");
  const projects = useProjectsConfig();

  return (
    <GridBox.Root type="stretch" className={css.root}>
      <GridBox.Header
        title={t("Projects.title")}
        subtitle={t("Projects.subtitle")}
        intro={t("Projects.intro")}
        icon={<MdWorkHistory />}
      />
      <ul aria-label="Projects I worked on" className={css.projectList}>
        {projects.map((project) => (
          <li key={project.title}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </GridBox.Root>
  );
}

function Project({ title, description, href }: ProjectData) {
  return (
    <article className={css.project}>
      <Link href={href ?? "/"} aria-label="Link to project">
        <Image
          src={portfolioPreviewImage}
          alt="Preview Image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        <TbExternalLink className={css.linkItem} />
        <div />
      </Link>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
}