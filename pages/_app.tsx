import "@/styles/globals.css";
import "../public/assets/css/style.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import SubpageModal from "@/components/sections/SubpageModal";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SubpageModal />
      
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
