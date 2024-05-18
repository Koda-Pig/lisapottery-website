import "../styles/globals.scss";

export const metadata = {
  title: "Lisa Liebermann",
  description: "Lisa Liebermann's portfolio."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}