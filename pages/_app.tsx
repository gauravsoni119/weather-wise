import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/with-layout";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
