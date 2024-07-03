import portraitImage from "@/../public/portrait.png";
import { GridBox } from "@/app/_components";
import { TextFont } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import css from "./introBox.module.css";

export function IntroBox() {
  const t = useTranslations("index.Intro");

  return (
    <section className={css.root}>
      <div className={css.content}>
        <GridBox.Header
          title="Vinzent Alexander Zeband"
          subtitle={t("subtitle")}
        />
        <Timeline />
      </div>
      <Portrait />
    </section>
  );
}

function Timeline() {
  const t = useTranslations("index.Intro.timeline");
  const keys = ["2003", "2015", "2017", "2019"] as const;

  return (
    <ol className={css.timeline}>
      {keys.map((key, i) => (
        <li key={key}>
          <TextFont asChild type="mono">
            <time>{key}</time>
          </TextFont>
          <div className={css.timelineLine}>
            {i === keys.length - 1 && <div className={css.timelineEllipsis} />}
          </div>
          <div className={css.timelineContent}>
            <h4>{t(`${key}.title`)}</h4>
            {t(`${key}.description`) && <p>{t(`${key}.description`)}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Portrait() {
  return (
    <div className={css.portrait}>
      <div className={css.image}>
        <Image
          src={portraitImage}
          alt="Portrait"
          fill
          style={{ objectPosition: "top center", objectFit: "cover" }}
        />
      </div>
      <ul className={css.portraitOverlay}>
        <li>
          <Link href="https://github.com/aparx">
            <BsGithub />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/bonedfps">
            <BsTwitterX />
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/_vizeb_">
            <BsInstagram />
          </Link>
        </li>
      </ul>
    </div>
  );
}
