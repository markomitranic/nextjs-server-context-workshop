import { getLocale } from "@/context/LocaleContext/LocaleServerContextProvider";
import { getUser } from "@/context/UserContext/UserServerContextProvider";

export function ServerComponent() {
  const locale = getLocale();
  const user = getUser();
  
  return (
    <>
      <p>Server Locale: {locale}</p>
      <p>Server User: {JSON.stringify(user)}</p>
    </>
  );
}
