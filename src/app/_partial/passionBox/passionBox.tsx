import { GridBox } from "@/app/_components";
import { useTranslations } from "next-intl";
import { CgSpinner } from "react-icons/cg";
import { IoMdCheckmark } from "react-icons/io";
import { MdErrorOutline, MdVerified } from "react-icons/md";
import { PiCursorFill } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import css from "./passionBox.module.css";

const items: Array<[number, "error" | "valid" | "default"]> = [
  [15, "valid"],
  [80, "default"],
  [100, "default"],
  [10, "error"],
  [45, "default"],
  [10, "default"],
  [50, "valid"],
  [75, "default"],
  [20, "valid"],
  [105, "default"],
  [50, "default"],
  [75, "default"],
  [125, "default"],
  [80, "default"],
  [20, "valid"],
  [100, "default"],
  [100, "default"],
  [50, "error"],
  [80, "default"],
  [20, "default"],
  [75, "default"],
  [50, "default"],
  [150, "default"],
  [75, "default"],
  [45, "default"],
  [20, "valid"],
  [105, "default"],
  [50, "default"],
  [150, "default"],
  [125, "default"],
  [80, "default"],
];

export function PassionBox() {
  const t = useTranslations("index.Passion");
  let errorIndex = 0;

  return (
    <GridBox.Root type="split" side="start">
      <GridBox.Header
        title={t("title")}
        subtitle={t("subtitle")}
        icon={<MdVerified />}
        intro={t("intro")}
      />
      <div className={css.boxImageContainer} aria-hidden>
        <div className={css.editor}>
          <div className={css.editorStatus}>
            <div>
              <div data-status="compiling">
                <CgSpinner /> Compiling
              </div>
              <div data-status="error">
                <MdErrorOutline />
                Syntax Error
              </div>
              <div data-status="compiled">
                <IoMdCheckmark />
                Compiled
              </div>
            </div>
          </div>
          <div className={css.editorHeader}>
            <div>
              <VscVscode />
              editor
            </div>
            <div>
              <div data-action="minimize" />
              <div data-action="maximize" />
              <div data-action="close" />
            </div>
          </div>
          <div className={css.editorContentWrapper}>
            <div className={css.editorContent}>
              <PiCursorFill className={css.cursor} />
              {items.map(([width, state], i) => (
                <span
                  key={i}
                  style={{ width }}
                  data-state={state}
                  data-error-index={
                    state === "error" ? ++errorIndex : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </GridBox.Root>
  );
}
