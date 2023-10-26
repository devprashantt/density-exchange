import "./globals.scss";

export const metadata = {
  title: "Ahead App - The pocket coach of your emotions",
  description: "Density app task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
