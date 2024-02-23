"use client";

import { useContext } from "react";
import { createContext } from "react";
import { LocaleContextParams } from "./LocaleContextProvider";

export const LocaleClientContext = createContext<string | null>(null);

export function LocaleClientContextProvider({ locale, children }: LocaleContextParams) {
  return (
    <LocaleClientContext.Provider value={locale}>
      {children}
    </LocaleClientContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleClientContext);
}
