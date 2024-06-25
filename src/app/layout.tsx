import Script from "next/script";
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NR56J0G51G"
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NR56J0G51G');
          `
        }}
      />
      <body>{children}</body>
    </html>
  );
}
