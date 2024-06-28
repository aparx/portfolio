import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const userLanguage = headers().get("Accept-Language");
  const locale = userLanguage?.startsWith("de") ? "de" : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
