import { LocaleContextProvider } from "@/context/LocaleContext/LocaleContextProvider";
import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";
import { UserContextProvider } from "@/context/UserContext/UserContextProvider";

export default function Home() {
  return (
    <LocaleContextProvider locale={"en-GB"}>
      <UserContextProvider user={{id: "1", name: "Marko", cpr: "0101010101"}}>
        <ClientComponent />
        <ServerComponent />
      </UserContextProvider>
    </LocaleContextProvider>
  );
}
