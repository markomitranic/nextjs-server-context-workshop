"use client";

import { useEffect } from "react";
import { useAlternateUrls } from "./AlternateUrlContextProvider";
import { RouteUrlDefinition } from "@/app/remote-layout/getAlternateUrls";

export default function AlternateUrlContextHydrator({
  alternateLinks,
}: {
  alternateLinks: RouteUrlDefinition[];
}) {
  const { setLinks } = useAlternateUrls();
  useEffect(() => setLinks(alternateLinks), [alternateLinks, setLinks]);
  return null;
}
