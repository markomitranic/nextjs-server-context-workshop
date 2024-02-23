import { UserServerContextProvider } from "./UserServerContextProvider";
import { UserClientContextProvider } from "./UserClientContextProvider";
import { UserDto, type User } from "@/lib/domain/User";

export type UserContextParams = {
  user: User;
  children: React.ReactNode;
};

export function UserContextProvider({ user, children }: UserContextParams) {
  return (
    <UserServerContextProvider user={user}>
      <UserClientContextProvider
        user={{
          id: user.id,
          name: user.name,
        }}
      >
        {children}
      </UserClientContextProvider>
    </UserServerContextProvider>
  );
}
