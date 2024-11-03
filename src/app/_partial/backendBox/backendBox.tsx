import { GridBox } from "@/app/_components";
import { TextFont } from "@/components";
import { useTranslations } from "next-intl";
import { BsDatabase } from "react-icons/bs";
import {
  MdNumbers,
  MdOutlineSubdirectoryArrowRight,
  MdTextFields,
} from "react-icons/md";
import css from "./backendBox.module.css";

const rows: Array<string> = [
  "DataDriveR",
  "aparx",
  "BitNinjaX",
  "dvjr1310",
  "ByteCraftr",
  "RobertGrant",
  "MasonLee",
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
                <th>
                  <div>
                    <MdNumbers />
                    id
                  </div>
                </th>
                <th>
                  <div>
                    <MdTextFields />
                    username
                  </div>
                </th>
                <th>
                  <div>
                    <MdTextFields />
                    hashed_password
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((name, i) => (
                <TextFont key={i} asChild type="mono">
                  <tr data-selected={i === 1 || i === 3}>
                    <td />
                    <td>{20 + i}</td>
                    <TextFont asChild type="sans">
                      <td style={{ letterSpacing: "0.03em" }}>{name}</td>
                    </TextFont>
                    <td>
                      <div className={css.hiddenCell} />
                    </td>
                  </tr>
                </TextFont>
              ))}
            </tbody>
          </table>
        </div>
        <div className={css.query}>
          <MdOutlineSubdirectoryArrowRight />
          <span data-keyword="word">SELECT</span>
          <span data-keyword="*">*</span>
          <span data-keyword="word">FROM</span>
          table
        </div>
      </div>
    </GridBox.Root>
  );
}
