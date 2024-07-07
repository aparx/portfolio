import { useTranslations } from "next-intl";
import { IconBaseProps } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

export interface ProjectData {
  title: string;
  description: string;
  href?: string;
  links?: ReadonlyArray<{
    type: ProjectLinkType;
    href: string;
  }>;
}

export type ProjectLinkType = keyof typeof EXTERNAL_LINK_ICONS;

export const EXTERNAL_LINK_ICONS = {
  github: (props) => <BsGithub aria-label="GitHub" {...props} />,
  figma: (props) => <FiFigma aria-label="Figma" {...props} />,
} as const satisfies Record<string, React.FC<IconBaseProps>>;

export function useProjectsConfig(): ReadonlyArray<Readonly<ProjectData>> {
  const t = useTranslations("index.Projects.projects");
  return [
    {
      title: t("portfolio.title"),
      description: t("portfolio.description"),
      href: "/",
      links: [
        {
          type: "github",
          href: "https://github.com/aparx/portfolio",
        },
      ],
    },
    {
      title: t("roadone30.title"),
      description: t("roadone30.description"),
      href: "/",
    },
  ];
}
