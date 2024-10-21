import { useTranslations } from "next-intl";
import React, { useMemo } from "react";
import { CgVercel } from "react-icons/cg";
import { DiJava } from "react-icons/di";
import { FaNodeJs, FaTools } from "react-icons/fa";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGlobe,
  FaReact,
} from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiHibernate,
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
            name: "NodeJS",
            icon: <FaNodeJs color="#8CC84B" />,
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
        icon: <FaTools />,
        elements: [
          {
            name: "Figma",
            icon: <FaFigma />,
          },
          {
            name: "Hibernate",
            icon: <SiHibernate />,
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
