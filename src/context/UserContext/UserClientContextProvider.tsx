"use client";

import { useContext } from "react";
import { createContext } from "react";
import { UserDto } from "@/lib/domain/User";

export const UserClientContext = createContext<UserDto | null>(null);

export function UserClientContextProvider({ user, children }: {user: UserDto, children: React.ReactNode}) {
  return (
    <UserClientContext.Provider value={user}>
      {children}
    </UserClientContext.Provider>
  );
}

export function useUser() {
  return useContext(UserClientContext);
}
