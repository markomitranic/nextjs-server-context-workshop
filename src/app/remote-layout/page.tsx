import { getAlternateUrls } from "./getAlternateUrls";
import { Table } from "./Table";
import AlternateUrlContextHydrator from "@/context/AlternateUrlContext/AlternateUrlContextHydrator";

export default async function Home(params: { locale: string }) {
  // Logic that only our page can know.
  const alternateLinks = await getAlternateUrls(async (locale) => ({
    type: "PRODUCT",
    categoryId: "vinkøleskabe",
    sku: "15-cavecool-120flasker",
    locale,
    currentLocale: params.locale,
  }));

  return (
    <>
      <AlternateUrlContextHydrator alternateLinks={alternateLinks} />
      <p>Our pretty page content.</p>
      <p>Table is server rendered:</p>
      <Table alternateLinks={alternateLinks} />
    </>
  );
}
