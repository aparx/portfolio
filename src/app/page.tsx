import databaseImage from "@/../public/grid/database.svg";
import fullstackImage from "@/../public/grid/fullstack.svg";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { GridBox, IntroBox } from "./_components";
import css from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={css.background} />
      <div className={css.container}>
        <IntroBox />
        <main className={css.grid}>
          <ServiceRow />
          <GridBox.Root type="stretch">
            <GridBox.Header
              title="I speak many languages."
              subtitle="Web technologies, is one of them."
              intro="Different languages, frameworks and tools"
            />
          </GridBox.Root>
          <GridBox.Root type="split" side="start">
            <GridBox.Header
              title="Passion is guaranteed, always."
              subtitle="My love is a driving motivator."
              intro={
                <>
                  <MdVerified />
                  Varying complexity
                </>
              }
            />
          </GridBox.Root>
          <GridBox.Root type="split" side="end">
            <GridBox.Header
              title="From medium to large scale."
              subtitle="Any scale of application. I do it."
              intro={
                <>
                  <FaArrowTrendUp />
                  Varying complexity
                </>
              }
            />
          </GridBox.Root>
          <GridBox.Root type="stretch">Projects</GridBox.Root>
          <GridBox.Root type="stretch" style={{ borderBottom: "unset" }}>
            Get in touch
          </GridBox.Root>
        </main>
      </div>
    </>
  );
}

function ServiceRow() {
  return (
    <>
      <GridBox.Root type="split" side="start" style={{ borderTop: "unset" }}>
        <GridBox.Header
          title="Frontend Engineering"
          subtitle="From concept, to implementation."
          intro={"Crafting user experiences"}
        />
        <div className={css.boxImageContainer}>
          <Image
            fill
            src={fullstackImage}
            alt="The same webapp opened on both a phone and desktop"
            style={{ objectFit: "contain" }}
          />
        </div>
      </GridBox.Root>
      <GridBox.Root type="split" side="end" style={{ borderTop: "unset" }}>
        <GridBox.Header
          title="Backend Engineering"
          subtitle="Creating performant backends."
          intro={"Scalable and performant backends"}
        />
        <div className={css.boxImageContainer}>
          <Image
            fill
            src={databaseImage}
            alt="Database table showing many entries"
            style={{ objectFit: "contain" }}
          />
        </div>
      </GridBox.Root>
    </>
  );
}
