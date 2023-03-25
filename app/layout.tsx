import "./globals.css";

export const metadata = {
  title: "Post It App",
  description: "Powered by Saman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
