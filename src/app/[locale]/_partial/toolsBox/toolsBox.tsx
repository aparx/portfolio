"use client";
import { TextFont } from "@/components";
import { useInterval } from "@/hooks";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import { GridBox } from "../../_components";
import { useToolCategories } from "./toolsBox.config";
import css from "./toolsBox.module.css";

interface ToolsCategory {
  name: string;
  icon: React.ReactNode;
  elements: Array<{
    icon: React.ReactNode;
    name: string;
  }>;
}

export function ToolsBox() {
  const t = useTranslations("index");
  const [active, setActive] = useState(0);
  const categories = useToolCategories();
  const activeCategory = categories[active];
  const [maxHeight, setMaxHeight] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newHeight = containerRef.current?.clientHeight;
    if (newHeight == null) return;
    setMaxHeight((oldHeight) => Math.max(newHeight, oldHeight ?? 0));
  }, []);

  const interval = useInterval(() => {
    setActive((oldActive) => (1 + oldActive) % categories.length);
  }, 4500);

  return (
    <GridBox.Root type="stretch" className={css.root}>
      <div>
        <GridBox.Header
          title={t("Languages.title")}
          subtitle={t("Languages.subtitle", {
            name: activeCategory?.name,
          })}
          intro={t("Languages.intro")}
        />
        <div className={css.selectorContainer}>
          <ul className={css.selector} aria-label="Category Selector">
            {categories.map((category, i) => (
              <li key={category.name}>
                <label
                  data-active={i === active}
                  onClick={() => {
                    setActive(i);
                    interval.restart();
                  }}
                >
                  <VisuallyHidden>
                    <input
                      type="radio"
                      name={"Select Category"}
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
      </div>
      <div ref={containerRef} style={{ minHeight: maxHeight }}>
        <ul className={css.toolList} aria-label={activeCategory?.name}>
          {activeCategory?.elements.map((element, i) => (
            <li
              key={element.name}
              className={css.tool}
              style={{
                animationDelay: `${50 * i}ms`,
              }}
            >
              {element.icon}
              {element.name}
            </li>
          ))}
        </ul>
        <TextFont asChild size="sm">
          <p>{t("Languages.outro")}</p>
        </TextFont>
      </div>
    </GridBox.Root>
  );
}
