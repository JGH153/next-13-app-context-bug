import NameProvider from "./name-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <NameProvider>
        <body>(Layout with Context){children}</body>
      </NameProvider>
    </html>
  );
}
