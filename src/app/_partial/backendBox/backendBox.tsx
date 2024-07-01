import { GridBox } from "@/app/_components";
import { TextFont } from "@/components";
import { useTranslations } from "next-intl";
import { BsDatabase } from "react-icons/bs";
import css from "./backendBox.module.css";

const rows: Array<[string, Date]> = [
  ["Nathan", new Date()],
  ["Vinzent", new Date("2003-10-13")],
  ["Daniela", new Date("1978-02-13")],
  ["Joseph", new Date("1967-07-13")],
  ["Noah", new Date()],
  ["Alex", new Date()],
  ["Joko", new Date()],
];

export function BackendBox() {
  const t = useTranslations("index.Backend");

  return (
    <GridBox.Root type="split" side="end" style={{ borderTop: "unset" }}>
      <GridBox.Header
        title={t("title")}
        subtitle={t("subtitle")}
        intro={t("intro")}
        icon={<BsDatabase />}
      />
      <div className={css.root} aria-hidden>
        <div className={css.container}>
          <table>
            <thead>
              <tr>
                <th />
                <th>id</th>
                <th>first_name</th>
                <th>birth_date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, date], i) => (
                <TextFont key={i} asChild type="mono">
                  <tr data-selected={i === 1 || i === 3}>
                    <td />
                    <td>{20 + i}</td>
                    <TextFont asChild type="sans">
                      <td style={{ letterSpacing: "0.03em" }}>{name}</td>
                    </TextFont>
                    <td>{date.toISOString()}</td>
                  </tr>
                </TextFont>
              ))}
            </tbody>
          </table>
        </div>
        <div className={css.query}>
          <span data-keyword="word">SELECT</span>
          <span data-keyword="*">*</span>
          <span data-keyword="word">FROM</span>
          table
        </div>
      </div>
    </GridBox.Root>
  );
}
