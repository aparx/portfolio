import portraitImage from "@/../public/portrait.png";
import thatsMeImage from "@/../public/thatsMe.svg";
import { TextFont } from "@/components";
import Image from "next/image";
import { GridBox } from "../gridBox";
import css from "./introBox.module.css";

interface TimelineItemData {
  date: string;
  title: string;
  description?: string;
}

const TIMELINE_ITEMS: ReadonlyArray<Readonly<TimelineItemData>> = [
  {
    date: "2003",
    title: "Born October 13th",
  },
  {
    date: "2015",
    title: "The beginning of my journey",
    description: "I began with Visual Basic and quickly moved to Java.",
  },
  {
    date: "2017",
    title: "Desktop and Game development",
    description:
      "I began making larger projects with Java and C++, that a couple thousand users would end up using. Also begun reverse enginnering.",
  },
  {
    date: "2019",
    title: "Fullstack development",
    description:
      "Started to work in fullstack web development. Initially with PHP & Laravel (MVC) and later with many JS Frameworks.",
  },
] as const;

export function IntroBox() {
  return (
    <article className={css.intro}>
      <div>
        <div className={css.content}>
          <GridBox.Header
            title="Vinzent Alexander Zeband"
            subtitle="Fullstack Developer & UI/UX Designer"
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
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: "-75%",
              rotate: "0deg",
            }}
          >
            <Image src={thatsMeImage} alt="Arrow" width={180} />
          </div>
        </div>
      </div>
      <TextFont asChild type="mono" size="sm">
        <footer>Contact me</footer>
      </TextFont>
    </article>
  );
}

function Timeline() {
  return (
    <ol className={css.timeline}>
      {TIMELINE_ITEMS.map((element) => (
        <li key={element.date}>
          <TextFont asChild type="mono">
            <time>{element.date}</time>
          </TextFont>
          <div className={css.timelineLine} />
          <div>
            <h4>{element.title}</h4>
            <p>{element.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
