import portraitImage from "@/../public/portrait.png";
import thatsMeImage from "@/../public/thatsMe.svg";
import { Button, TextFont } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
        <footer>
          <SocialList />
        </footer>
      </TextFont>
    </section>
  );
}

function Timeline() {
  const t = useTranslations("index.Intro.timeline");
  const keys = ["2003", "2015", "2017", "2019"] as const;
  return (
    <ol className={css.timeline} aria-label="My knowledge timeline">
      {keys.map((key) => (
        <li key={key}>
          <TextFont asChild type="mono">
            <time>{key}</time>
          </TextFont>
          <div className={css.timelineLine} />
          <div>
            <h4>{t(`${key}.title`)}</h4>
            <p>{t(`${key}.description`)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SocialList() {
  return (
    <ul className={css.socialList} aria-label="Contact me">
      <li>
        <Button asChild appearance="transparent">
          <Link href="https://x.com/bonedfps">
            <BsTwitterX aria-label="Twitter/X" />
            <p aria-hidden>@bonedfps</p>
          </Link>
        </Button>
      </li>
      <li>
        <Button asChild appearance="transparent">
          <Link href="https://instagram.com/_vizeb_">
            <BsInstagram aria-label="Instagram" />
            <p aria-hidden>@_vizeb_</p>
          </Link>
        </Button>
      </li>
      <li>
        <Button asChild appearance="transparent">
          <Link href="https://github.com/aparx">
            <BsGithub aria-label="GitHub" />
            <p aria-hidden>@aparx</p>
          </Link>
        </Button>
      </li>
      <li>
        <Button asChild appearance="transparent">
          <Link href="mailto:contact@vizeb.com">
            <MdEmail aria-label="Email" />
            <p>contact@vizeb.com</p>
          </Link>
        </Button>
      </li>
    </ul>
  );
}
