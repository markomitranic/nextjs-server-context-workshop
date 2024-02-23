import { getUser } from "@/context/UserContext/UserServerContextProvider";

export function ServerComponent() {
  const user = getUser();

  return <p>Server User: {JSON.stringify(user)}</p>;
}
