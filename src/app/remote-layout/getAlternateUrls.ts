export type RouteUrlDefinition = {
  href: string;
  locale: string;
  type: "relative" | "absolute";
  changedLocale: boolean;
};

export async function getAlternateUrls(
  callback: (locale: string) => Record<string, any>
): Promise<RouteUrlDefinition[]> {
  return [
    {
      href: "/shop/wine-fridges/15-cavecool-120bottles",
      locale: "en-GB",
      type: "relative",
      changedLocale: false,
    },
    {
      href: "/shop/vinkøleskabe/15-cavecool-120flasker",
      locale: "da-DK",
      type: "relative",
      changedLocale: true,
    },
    {
      href: "https://example.com/shop/wine-fridges/15-cavecool-120bottles",
      locale: "en-US",
      type: "absolute",
      changedLocale: true,
    },
  ];
}
