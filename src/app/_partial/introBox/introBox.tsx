import portraitImage from "@/../public/portrait.png";
import { GridBox } from "@/app/_components";
import { TextFont } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import css from "./introBox.module.css";

export function IntroBox() {
  return (
    <section className={css.root}>
      <div className={css.content}>
        <GridBox.Header
          title="Vinzent Alexander Zeband"
          subtitle="Fullstack Developer & UI/UX"
        />
        <Timeline />
      </div>
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
    </section>
  );
}

function Timeline() {
  const t = useTranslations("index.Intro.timeline");
  const keys = ["2003", "2015", "2017", "2019"] as const;

  return (
    <ol className={css.timeline}>
      {keys.map((key) => (
        <li key={key}>
          <TextFont asChild type="mono">
            <time>{key}</time>
          </TextFont>
          <div className={css.timelineLine} />
          <div className={css.timelineContent}>
            <h4>{t(`${key}.title`)}</h4>
            {t(`${key}.description`) && <p>{t(`${key}.description`)}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
