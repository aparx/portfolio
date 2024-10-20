"use client";
import { GridBox } from "@/app/_components";
import { useTranslations } from "next-intl";
import { FaArrowTrendUp, FaDesktop, FaServer } from "react-icons/fa6";
import css from "./scaleBox.module.css";
import { MdRouter } from "react-icons/md";

export function ScaleBox() {
  const t = useTranslations("index.Scale");

  return (
    <GridBox.Root type="split" side="end" style={{ minWidth: 0, minHeight: 0 }}>
      <GridBox.Header
        title={t("title")}
        subtitle={t("subtitle")}
        icon={<FaArrowTrendUp />}
        intro={t("intro")}
      />
      <div className={css.container} style={{ minWidth: 0, minHeight: 0 }}>
        <div className={css.clientContainer}>
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={css.client}>
              <FaDesktop style={{ fontSize: "1.3em" }} />
            </div>
          ))}
        </div>
        <div className={css.serverContainer}>
          <div className={css.server}>
            <MdRouter style={{ fontSize: "1.5em" }} />
          </div>
        </div>
      </div>
    </GridBox.Root>
  );
}
