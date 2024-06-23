import { useTranslations } from "next-intl";
import { MdWorkHistory } from "react-icons/md";
import { GridBox } from "../../_components";

export function ProjectsBox() {
  const t = useTranslations("index");

  return (
    <GridBox.Root type="stretch">
      <GridBox.Header
        title={t("Projects.title")}
        subtitle={t("Projects.subtitle")}
        intro={t("Projects.intro")}
        icon={<MdWorkHistory />}
      />
    </GridBox.Root>
  );
}

function Project() {}
