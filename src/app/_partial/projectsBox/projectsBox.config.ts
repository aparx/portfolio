import { useTranslations } from "next-intl";

export interface ProjectData {
  title: string;
  description: string;
  href?: string;
}

export function useProjectsConfig(): ReadonlyArray<Readonly<ProjectData>> {
  const t = useTranslations("index.Projects.projects");
  return [
    {
      title: t("portfolio.title"),
      description: t("portfolio.description"),
      href: "/",
    },
    {
      title: t("roadone30.title"),
      description: t("roadone30.description"),
      href: "/",
    },
  ];
}
