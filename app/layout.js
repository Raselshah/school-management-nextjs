import "../app/globals.css";
import Navbar from "./navbar";
import { Providers } from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Navbar/>
          {children}
          </Providers>
      </body>
    </html>
  );
}
