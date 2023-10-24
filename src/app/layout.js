import "./globals.scss";

export const metadata = {
  title: "Ahead App - the pocket coach to stay on top your emotions",
  description: "Density app task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
