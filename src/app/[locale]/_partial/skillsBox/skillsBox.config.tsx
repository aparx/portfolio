import { useTranslations } from "next-intl";
import React, { useMemo } from "react";
import { CgVercel } from "react-icons/cg";
import { DiIllustrator, DiJava } from "react-icons/di";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGlobe,
  FaReact,
} from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";
import { RiNextjsLine, RiSvelteLine } from "react-icons/ri";
import {
  SiLaravel,
  SiPostgresql,
  SiPrisma,
  SiSpring,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

export interface ToolsCategory {
  name: string;
  icon: React.ReactNode;
  elements: Array<{
    icon: React.ReactNode;
    name: string;
  }>;
}

export function useToolCategories() {
  const t = useTranslations("index");

  return useMemo<ToolsCategory[]>(
    () => [
      {
        name: t("Languages.categories.0"),
        icon: <FaGlobe />,
        elements: [
          {
            name: "React",
            icon: <FaReact color="#64B5E2" />,
          },
          {
            name: "NextJS",
            icon: <RiNextjsLine color="white" />,
          },
          {
            name: "Spring",
            icon: <SiSpring color="#8CC84B" />,
          },
          {
            name: "Laravel",
            icon: <SiLaravel color="#fa5d2a" />,
          },
          {
            name: "Svelte",
            icon: <RiSvelteLine color="#fa5d2a" />,
          },
          {
            name: "SvelteKit",
            icon: <RiSvelteLine color="#fa5d2a" />,
          },
        ],
      },
      {
        name: t("Languages.categories.1"),
        icon: <IoLanguage />,
        elements: [
          {
            name: "Typescript",
            icon: <SiTypescript color="#64B5E2" />,
          },
          {
            name: "Java",
            icon: <DiJava />,
          },
          {
            name: "PL/pgSQL",
            icon: <SiPostgresql />,
          },
          {
            name: "Sass/CSS",
            icon: <FaCss3Alt />,
          },
        ],
      },
      {
        name: t("Languages.categories.2"),
        icon: <FiFigma />,
        elements: [
          {
            name: "Figma",
            icon: <FaFigma />,
          },
          {
            name: "Illustrator",
            icon: <DiIllustrator color="#F58219" />,
          },
          {
            name: "Vercel",
            icon: <CgVercel />,
          },
          {
            name: "Supabase",
            icon: <SiSupabase color="#8CC84B" />,
          },
          {
            name: "Git",
            icon: <FaGitAlt />,
          },
          {
            name: "Prisma",
            icon: <SiPrisma />,
          },
        ],
      },
    ],
    [t]
  );
}
