import "../styles/globals.scss";
import Banner from "@/components/banner";

export const metadata = {
  title: "Lisa Liebermann",
  description: "Lisa Liebermann's portfolio."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"gradient_background"}>
        <Banner>New website coming soon!</Banner>
        {children}
      </body>
    </html>
  );
}
