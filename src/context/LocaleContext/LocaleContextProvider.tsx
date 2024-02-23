import { LocaleServerContextProvider } from "./LocaleServerContextProvider";
import { LocaleClientContextProvider } from "./LocaleClientContextProvider";

export type LocaleContextParams = {
  locale: string;
  children: React.ReactNode;
};

export function LocaleContextProvider({
  locale,
  children,
}: LocaleContextParams) {
  return (
    <LocaleServerContextProvider locale={locale}>
      <LocaleClientContextProvider locale={locale}>
        {children}
      </LocaleClientContextProvider>
    </LocaleServerContextProvider>
  );
}
