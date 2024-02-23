import { HeaderComponent } from "./HeaderComponent";
import { AlternateUrlContextProvider } from "@/context/AlternateUrlContext/AlternateUrlContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AlternateUrlContextProvider>
          <HeaderComponent />
          <main>{children}</main>
        </AlternateUrlContextProvider>
      </body>
    </html>
  );
}
