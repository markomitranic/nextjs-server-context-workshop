import { getServerContext } from "@/CreateServerContext/createServerContext";
import { LocaleServerContext } from "./LocaleServerContext";

export function ServerComponent() {
  const locale = getServerContext(LocaleServerContext);
  return <p>Server Locale: {locale}</p>;
}
