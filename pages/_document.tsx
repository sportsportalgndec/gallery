import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/logo.png" />

          {/* Updated Meta Tags */}
          <meta name="description" content="Relive the best moments from the GNDEC Athletic Meet through our exclusive gallery." />
          
          {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
          <meta property="og:site_name" content="GNDEC Athletic Meet Gallery" />
          <meta property="og:title" content="GNDEC Athletic Meet Gallery" />
          <meta property="og:description" content="Relive the best moments from the GNDEC Athletic Meet through our exclusive gallery." />
          <meta property="og:image" content="/logo.png" />  {/* Update with correct image path */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://info.gndecathletix.games" />  {/* Update with your actual website URL */}

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="GNDEC Athletic Meet Gallery" />
          <meta name="twitter:description" content="Relive the best moments from the GNDEC Athletic Meet through our exclusive gallery." />
          <meta name="twitter:image" content="/logo.png" />  {/* Update with correct image path */}
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
