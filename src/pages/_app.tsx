import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";
import MultiContextProvider from "@/context/MultiContextLoader";

import "../scss/core.scss";
import "../styles/theme.default.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    require("bootstrap");
    require("jquery");
  }, []);

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Jakarta"
      messages={pageProps.messages}
    >
      <MultiContextProvider contexts={[ThemeProvider]}>
        <Component {...pageProps} />
      </MultiContextProvider>
    </NextIntlClientProvider>
  );
};

export default App;