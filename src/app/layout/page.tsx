import { LocaleContextProvider } from "@/context/LocaleContext/LocaleContextProvider";
import { ClientComponent } from "./ClientComponent";
import { ServerComponent } from "./ServerComponent";
import { UserContextProvider } from "@/context/UserContext/UserContextProvider";

export default function Home() {
  // Auth + Sanitize + fetch + scope...
  const user = { id: "1", name: "Marko", cpr: "0101010101" };

  return (
    <UserContextProvider user={user}>
      <ClientComponent />
      <ServerComponent />
    </UserContextProvider>
  );
}
