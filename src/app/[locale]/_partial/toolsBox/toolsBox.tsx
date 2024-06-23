"use client";
import webImage from "@/../public/tools/web.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { useMemo, useState } from "react";
import { BsStack } from "react-icons/bs";
import { FaFigma, FaGlobe } from "react-icons/fa6";
import { GridBox } from "../../_components";
import css from "./toolsBox.module.css";
import { FiFigma } from "react-icons/fi";

interface ToolsCategory {
  name: string;
  image: StaticImageData;
  icon: React.ReactNode;
}

export function ToolsBox() {
  const t = useTranslations("index");
  const [active, setActive] = useState(0);

  const categories = useMemo<ToolsCategory[]>(
    () => [
      {
        name: t("Languages.categories.0"),
        image: webImage,
        icon: <FaGlobe />,
      },
      {
        name: t("Languages.categories.1"),
        image: webImage,
        icon: <BsStack />,
      },
      {
        name: t("Languages.categories.2"),
        image: webImage,
        icon: <FiFigma />,
      },
    ],
    []
  );

  return (
    <GridBox.Root type="stretch">
      <GridBox.Header
        title={t("Languages.title")}
        subtitle={t("Languages.subtitle", {
          name: categories[active]!.name,
        })}
        intro={t("Languages.intro")}
      />
      <div className={css.selectorContainer}>
        <ul className={css.selector} aria-label="Category Selector">
          {categories.map((category, i) => (
            <li>
              <label data-active={i === active} onClick={() => setActive(i)}>
                <VisuallyHidden>
                  <input
                    type="radio"
                    name={category.name}
                    checked={active === i}
                  />
                </VisuallyHidden>
                {category.icon}
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </GridBox.Root>
  );
}
