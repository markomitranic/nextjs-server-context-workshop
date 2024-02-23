import { LocaleServerContext } from "./LocaleServerContext";
import { ServerComponent } from "./ServerComponent";

export default function Home() {
  return (
    <LocaleServerContext.Provider value={"en-GB"}>
        <ServerComponent />
    </LocaleServerContext.Provider>
  );
}