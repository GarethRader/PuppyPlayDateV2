import "../styles/globals.css";
import type { AppProps } from "next/app";

// TODO: add infrastructure for SEO (see https://github.com/garmeeh/next-seo)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
