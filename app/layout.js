import "./globals.css";

export const metadata = {
  title: "Weekly Report Transformation Skill",
  description: "Enterprise AI workflow case study",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
