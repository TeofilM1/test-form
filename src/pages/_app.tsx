import type { AppProps } from "next/app";
import { QueryClientProvider } from "../providers";
import "../styles/globals.css";
import { AppLayout } from "@/AppLayout/LayoutWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </QueryClientProvider>
  );
}
