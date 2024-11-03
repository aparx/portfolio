"use client";
import { TextFont } from "@/components";
import { useInterval } from "@/hooks";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GridBox } from "../../_components";
import { useToolCategories } from "./skillsBox.config";
import css from "./skillsBox.module.css";

export function SkillsBox() {
  const t = useTranslations("index");
  const categories = useToolCategories();
  const [active, setActive] = useState(0);
  const [maxHeight, setMaxHeight] = useState<number>();
  const [enableInterval, setEnableInterval] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationDeltaRef = useRef<"up" | "down">("down");
  const controlId = useId();
  const layoutId = useId();
  const activeCategory = categories[active];

  useEffect(() => {
    const newHeight = containerRef.current?.clientHeight;
    if (newHeight == null) return;
    setMaxHeight((oldHeight) => Math.max(newHeight, oldHeight ?? 0));
  }, [setMaxHeight]);

  useInterval({
    callback: () =>
      setActive((oldActive) => {
        const newIndex = (1 + oldActive) % categories.length;
        animationDeltaRef.current = newIndex > oldActive ? "down" : "up";
        return newIndex;
      }),
    timeInMs: 5000,
    enabled: enableInterval,
  });

  const { ref } = useInView({
    onChange: (inView) => setEnableInterval(inView),
  });

  return (
    <GridBox.Root type="stretch" className={css.root}>
      <div ref={ref}>
        <GridBox.Header
          title={t("Languages.title")}
          subtitle={
            <div
              style={{
                position: "relative",
                height: "1.25em",
                width: "100%",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <AnimatePresence>
                <motion.div
                  key={activeCategory?.name}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0, position: "absolute" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                  {activeCategory?.name}
                </motion.div>
              </AnimatePresence>
              <span>{t("Languages.subtitle")}</span>
            </div>
          }
          intro={t("Languages.intro")}
        />
        {/** Category Selector */}
        <div
          className={css.selectorContainer}
          onMouseEnter={() => setEnableInterval(false)}
          onMouseLeave={() => setEnableInterval(true)}
          onFocus={() => setEnableInterval(false)}
          onBlur={() => setEnableInterval(true)}
        >
          <fieldset className={css.selector} aria-label="Category Selector">
            {categories.map((category, i) => (
              <label key={category.name} data-active={i === active}>
                {i === active && (
                  <motion.span
                    className={css.selectorAnimator}
                    layoutId={layoutId}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <VisuallyHidden>
                  <input
                    type="radio"
                    name={"Select Category"}
                    aria-controls={controlId}
                    checked={active === i}
                    onChange={() => {
                      setActive((oldActive) => {
                        animationDeltaRef.current =
                          i > oldActive ? "down" : "up";
                        return i;
                      });
                    }}
                  />
                </VisuallyHidden>
                {category.icon}
                {category.name}
              </label>
            ))}
          </fieldset>
        </div>
      </div>
      {/** Category Contents */}
      <div ref={containerRef} style={{ minHeight: maxHeight }}>
        <ul
          className={css.toolList}
          aria-label={activeCategory?.name}
          id={controlId}
          data-animation-delta={animationDeltaRef.current}
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
