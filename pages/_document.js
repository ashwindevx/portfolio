import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content="Ashwin - Frontend Developer" />
          <meta
            name="description"
            content="Ashwin Chauhan's portfolio website."
          />
          <link rel="icon" href="/Frame 14.png" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ashwin.codes/" />
          <meta property="og:title" content="Ashwin - Frontend Developer" />
          <meta
            property="og:description"
            content="Ashwin Chauhan's portfolio website."
          />
          <meta
            property="og:image"
            content="https://ashwin-codes.vercel.app/og-image.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.ashwin.codes/" />
          <meta
            property="twitter:title"
            content="Ashwin - Frontend Developer"
          />
          <meta
            property="twitter:description"
            content="Ashwin Chauhan's portfolio website."
          />
          <meta
            property="twitter:image"
            content="https://ashwin-codes.vercel.app/og-image.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Antonio:wght@100;200;300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
