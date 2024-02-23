import { getLocale } from "@/context/LocaleContext/LocaleServerContextProvider";

export function ServerComponent() {
  const locale = getLocale();
  return <p>Server Locale: {locale}</p>;
}
