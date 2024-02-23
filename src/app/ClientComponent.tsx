"use client";

import { useLocale } from "@/context/LocaleContext/LocaleClientContextProvider";

export function ClientComponent() {
  const locale = useLocale();
  return <p>Client Locale: {locale}</p>;
}
