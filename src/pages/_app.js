import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  scrollSepolia,
  zkSyncTestnet,
} from "wagmi/chains";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { Layout } from "@/components/Layout";
import { publicProvider } from "wagmi/providers/public";
import { ForwardContextProvider } from "@/context/ForwardContext";
import { configureChains, createConfig, WagmiConfig } from "wagmi";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zkSyncTestnet,
    scrollSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = "YOUR_PROJECT_ID";

const { wallets } = getDefaultWallets({
  appName: "Protocol 988",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Protocol 988",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <ForwardContextProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          theme={darkTheme()}
          appInfo={demoAppInfo}
          chains={chains}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </ForwardContextProvider>
  );
}
