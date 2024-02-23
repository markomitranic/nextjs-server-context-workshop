"use client";

import { useLocale } from "@/context/LocaleContext/LocaleClientContextProvider";
import { useUser } from "@/context/UserContext/UserClientContextProvider";

export function ClientComponent() {
  const locale = useLocale();
  const user = useUser();

  return (
    <>
      <p>Client Locale: {locale}</p>
      <p>Client User: {JSON.stringify(user)}</p>
    </>
  );
}
