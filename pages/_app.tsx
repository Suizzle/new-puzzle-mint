import { Chain, EthosConnectProvider } from "ethos-connect";
import ExampleIcon from "../icons/ExampleIcon";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NETWORK } from "../lib/constants";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const ethosConfiguration = {
    apiKey: process.env.NEXT_PUBLIC_ETHOS_API_KEY,
    preferredWallets: ['Ethos Wallet'],
    network: NETWORK,
    chain: Chain.SUI_MAINNET
  };

  return (
    <EthosConnectProvider
      ethosConfiguration={ethosConfiguration}
      dappName="Lindquest Punk as an inSui NFT"
      dappIcon="../lindquest.ico"
      connectMessage="Connect, solve and mint!"
    >
      <Head>
        <title>Lindquest Punk inSui</title>
        <link rel="shortcut icon" href="../lindquest.ico" />
      </Head>
      <Component {...pageProps} />
    </EthosConnectProvider>
  );
}

export default MyApp;
