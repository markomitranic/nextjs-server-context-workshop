import { LocaleContextProvider } from "@/context/LocaleContext/LocaleContextProvider";
import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";

export default async function Home() {
  return (
    <LocaleContextProvider locale={"en-GB"}>
      <ClientComponent />
      <ServerComponent />
    </LocaleContextProvider>
  );
}
