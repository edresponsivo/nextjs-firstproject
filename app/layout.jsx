import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata = {
  title: "NextJS My First App",
  description: "This is my first NextJS app",
  keywords: "Next.js, react, app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        />
      </head>
      <body>
        <Navigation />
        <main className="container p-4">{children}</main>
      </body>
    </html>
  );
}
