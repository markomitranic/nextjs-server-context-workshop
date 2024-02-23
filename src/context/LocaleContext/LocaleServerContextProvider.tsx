import { createServerContext, getServerContext } from "@/CreateServerContext/createServerContext";
import { LocaleContextParams } from "./LocaleContextProvider";

export const LocaleServerContext = createServerContext<string | null>(null);

export function LocaleServerContextProvider({
  locale,
  children,
}: LocaleContextParams) {
  return (
    <LocaleServerContext.Provider value={locale}>
      {children}
    </LocaleServerContext.Provider>
  );
}

export function getLocale() {
  return getServerContext(LocaleServerContext);
}