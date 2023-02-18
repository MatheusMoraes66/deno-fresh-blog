import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Header />
      <Component />
    </>
  );
}
