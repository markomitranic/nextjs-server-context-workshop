import { UserContextProvider } from "@/context/UserContext/UserContextProvider";
import { HeaderComponent } from "./HeaderComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Auth + Sanitize + fetch + scope...
  const user = { id: "1", name: "Marko", cpr: "0101010101" };

  return (
    <html lang="en">
      <body>
        <UserContextProvider user={user}>
          <HeaderComponent user={user} />
          <main>{children}</main>
        </UserContextProvider>
      </body>
    </html>
  );
}
