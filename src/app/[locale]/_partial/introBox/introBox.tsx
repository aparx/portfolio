import portraitImage from "@/../public/portrait.png";
import thatsMeImage from "@/../public/thatsMe.svg";
import { TextFont } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GridBox } from "../../_components/gridBox";
import css from "./introBox.module.css";

export function IntroBox() {
  const t = useTranslations("index");

  return (
    <section className={css.intro}>
      <div>
        <div className={css.content}>
          <GridBox.Header
            title="Vinzent Alexander Zeband"
            subtitle={t("Intro.subtitle")}
          />
          <Timeline />
        </div>
        <div className={css.portrait}>
          <Image
            src={portraitImage}
            alt="Portrait"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={css.portraitArrow}>
            <Image src={thatsMeImage} alt="Arrow" width={180} />
          </div>
        </div>
      </div>
      <TextFont asChild type="mono" size="sm">
        <footer>Contact</footer>
      </TextFont>
    </section>
  );
}

function Timeline() {
  const t = useTranslations("index");
  const keys = ["2003", "2015", "2017", "2019"] as const;

  return (
    <ol className={css.timeline} aria-label="My knowledge timeline">
      {keys.map((key, i) => (
        <li key={key}>
          <TextFont asChild type="mono">
            <time>{key}</time>
          </TextFont>
          <div className={css.timelineLine} />
          <div>
            <h4>{t(`Intro.timeline.${key}.title`)}</h4>
            <p>{t(`Intro.timeline.${key}.description`)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
