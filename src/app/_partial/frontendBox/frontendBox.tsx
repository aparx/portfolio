import { GridBox } from "@/app/_components";
import { useTranslations } from "next-intl";
import { MdLockOutline, MdOutlineDesktopMac } from "react-icons/md";
import css from "./frontendBox.module.css";

export function FrontendBox() {
  const t = useTranslations("index.Frontend");
  return (
    <GridBox.Root type="split" side="start" style={{ borderTop: "unset" }}>
      <GridBox.Header
        title={t("title")}
        subtitle={t("subtitle")}
        intro={t("intro")}
        icon={<MdOutlineDesktopMac />}
      />
      <div className={css.root} aria-hidden>
        <div className={css.phone}>
          <div />
          <FakeAppView />
          <div />
        </div>
        <div className={css.desktop}>
          <div>
            <div className={css.desktopUrl}>
              <MdLockOutline />
              <span>great.app</span>
            </div>
            <div>
              <span data-action="minimize" />
              <span data-action="maximize" />
              <span data-action="close" />
            </div>
          </div>
          <FakeAppView />
          <div />
        </div>
      </div>
    </GridBox.Root>
  );
}

function FakeAppView() {
  return (
    <div>
      Great App
      <div className={css.content}>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  );
}
