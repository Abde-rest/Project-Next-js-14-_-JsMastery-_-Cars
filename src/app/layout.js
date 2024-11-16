import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div> Header Her</div>
        {children}
        {/* Fotter Her */}
        <div>  </div>
      </body>
    </html>
  );
}
