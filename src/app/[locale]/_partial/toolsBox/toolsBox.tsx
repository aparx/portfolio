"use client";
import { TextFont } from "@/components";
import { useInterval } from "@/hooks";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GridBox } from "../../_components";
import { useToolCategories } from "./toolsBox.config";
import css from "./toolsBox.module.css";

export function ToolsBox() {
  const t = useTranslations("index");
  const [active, setActive] = useState(0);
  const categories = useToolCategories();
  const activeCategory = categories[active];
  const [maxHeight, setMaxHeight] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  const controlId = useId();

  useEffect(() => {
    const newHeight = containerRef.current?.clientHeight;
    if (newHeight == null) return;
    setMaxHeight((oldHeight) => Math.max(newHeight, oldHeight ?? 0));
  });

  const interval = useInterval({
    callback: () => setActive((last) => (1 + last) % categories.length),
    timeInMs: 4500,
    startByDefault: false,
  });

  const { ref } = useInView({
    onChange: (inView) => {
      if (!inView && active) interval.stop();
      else if (inView && !interval.isRunning()) interval.start();
    },
  });

  return (
    <GridBox.Root type="stretch" className={css.root}>
      <div ref={ref}>
        <GridBox.Header
          title={t("Languages.title")}
          subtitle={t("Languages.subtitle", {
            name: activeCategory?.name,
          })}
          intro={t("Languages.intro")}
        />
        {/** Category Selector */}
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
                      aria-controls={controlId}
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
      {/** Category Contents */}
      <div ref={containerRef} style={{ minHeight: maxHeight }}>
        <ul
          className={css.toolList}
          aria-label={activeCategory?.name}
          id={controlId}
        >
          {activeCategory?.elements.map((element, i) => (
            <li
              key={element.name}
              className={css.tool}
              style={{ animationDelay: `${50 * i}ms` }}
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
