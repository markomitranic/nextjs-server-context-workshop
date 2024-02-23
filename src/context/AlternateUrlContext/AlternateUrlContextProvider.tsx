"use client";

import { RouteUrlDefinition } from "@/app/remote-layout/getAlternateUrls";
import { useContext, useState } from "react";
import { createContext } from "react";

export const AlternateUrlContext = createContext({
  links: [] as RouteUrlDefinition[],
  setLinks: (links: RouteUrlDefinition[]) => {},
});

export function AlternateUrlContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [links, setLinks] = useState<RouteUrlDefinition[]>([]);

  return (
    <AlternateUrlContext.Provider value={{ links, setLinks }}>
      {children}
    </AlternateUrlContext.Provider>
  );
}

export function useAlternateUrls() {
  return useContext(AlternateUrlContext);
}
