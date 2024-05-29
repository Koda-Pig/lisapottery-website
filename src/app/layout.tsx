import "../styles/globals.scss";

export const metadata = {
  title: "Lisa Liebermann",
  description: "Lisa Liebermann's portfolio."
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" id="top">
      <body>{children}</body>
    </html>
  );
}
