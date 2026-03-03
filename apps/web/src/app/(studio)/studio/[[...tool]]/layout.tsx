export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Studio manages its own HTML structure — no ThemeProvider here
  return <>{children}</>;
}
