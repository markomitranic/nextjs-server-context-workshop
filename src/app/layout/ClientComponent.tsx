"use client";

import { useUser } from "@/context/UserContext/UserClientContextProvider";

export function ClientComponent() {
  const user = useUser();
  return <p>Client User: {JSON.stringify(user)}</p>;
}
