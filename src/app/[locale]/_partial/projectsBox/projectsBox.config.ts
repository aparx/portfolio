import { useTranslations } from "next-intl";

export interface ProjectData {
  title: string;
  description: string;
  href?: string;
}

export function useProjectsConfig(): ReadonlyArray<Readonly<ProjectData>> {
  const t = useTranslations("index");
  return [
    {
      title: t("Projects.projects.portfolio.title"),
      description: t("Projects.projects.portfolio.description"),
      href: "https://vizeb.dev/",
    },
    {
      title: t("Projects.projects.roadone30.title"),
      description: t("Projects.projects.roadone30.description"),
      href: "https://roadone30.de/",
    },
  ];
}
