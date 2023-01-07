import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics mode={"production"} />
    </>
  );
}

export default MyApp;
