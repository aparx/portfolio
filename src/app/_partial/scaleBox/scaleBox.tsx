"use client";
import { GridBox } from "@/app/_components";
import { Chart as ChartJS, LineElement } from "chart.js/auto";
import { useTranslations } from "next-intl";
import { Line as LineChart } from "react-chartjs-2";
import { FaArrowTrendUp } from "react-icons/fa6";
import css from "./scaleBox.module.css";

ChartJS.register(LineElement);

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
      <div className={css.scale} style={{ minWidth: 0, minHeight: 0 }}>
        <LineChart
          options={{
            responsive: true,
            scales: {
              x: {
                grid: {
                  color: "#212121",
                  drawTicks: false,
                },
              },
              y: {
                ticks: {
                  display: false,
                },
                grid: {
                  color: "#212121",
                },
              },
            },
          }}
          data={{
            labels: ["Q1'23", "Q2'23", "Q3'23", "Q4'23", "Q1'24", "Q2'24"],
            datasets: [
              {
                label: t("chart.users"),
                data: [10, 6421, 34952, 95621, 100000, 134000],
                borderWidth: 1,
                borderColor: "#64b5e2",
                pointBackgroundColor: "black",
                pointHoverBackgroundColor: "#64b5e2",
                tension: 0,
              },
              {
                label: t("chart.invocations"),
                data: [0, 10000, 60347, 134000, 160231, 200562],
                borderWidth: 1,
                borderColor: "rgba(210, 210, 210)",
                pointHoverBackgroundColor: "rgba(210, 210, 210)",
                pointBackgroundColor: "black",
                tension: 0,
              },
            ],
          }}
        />
      </div>
    </GridBox.Root>
  );
}
