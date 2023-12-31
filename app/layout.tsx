
import { Footer, NavBar } from "@/components";
import './globals.css';

export const metadata = {
  title: "Flexible",
  description: "Showcase and discover memorable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
