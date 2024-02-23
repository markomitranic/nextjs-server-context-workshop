import {getServerContext, createServerContext} from "@/CreateServerContext/createServerContext";
import { UserContextParams } from "./UserContextProvider";
import { User } from "@/lib/domain/User";

export const UserServerContext = createServerContext<User | null>(null);

export function UserServerContextProvider({
  user,
  children,
}: UserContextParams) {
  return (
    <UserServerContext.Provider value={user}>
      {children}
    </UserServerContext.Provider>
  );
}

export function getUser() {
  return getServerContext(UserServerContext);
}