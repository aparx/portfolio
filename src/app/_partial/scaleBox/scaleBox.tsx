"use client";
import { GridBox } from "@/app/_components";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { FaServer, FaUserAlt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbLoadBalancer } from "react-icons/tb";
import css from "./scaleBox.module.css";
import { RiFlowChart } from "react-icons/ri";
import { IoMdCloudOutline } from "react-icons/io";

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
          {useMemo(
            () =>
              Array.from({ length: 25 }, (_, i) => (
                <div
                  key={i}
                  className={css.client}
                  style={{
                    animationDelay: `${Math.round(1000 * Math.random())}ms`,
                  }}
                >
                  <FaUserAlt style={{ fontSize: "1.3em" }} />
                </div>
              )),
            []
          )}
        </div>
        <div className={css.serverContainer}>
          <div className={css.server}>
            <FaServer style={{ fontSize: "1.5em" }} />
          </div>
          <div className={css.server}>
            <IoMdCloudOutline style={{ fontSize: "1.5em" }} />
          </div>
          <div className={css.server}>
            <FaServer style={{ fontSize: "1.5em" }} />
          </div>
        </div>
      </div>
    </GridBox.Root>
  );
}
