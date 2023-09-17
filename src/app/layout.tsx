"use client";

import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  sepolia,
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
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";
import { publicProvider } from "wagmi/providers/public";
import { ForwardContextProvider } from "@/context/ForwardContext";
import { configureChains, createConfig, WagmiConfig } from "wagmi";

export const metadata: Metadata = {
  title: {
    template: "%s | Onchain forward contracts for crypto assets",
    default: "Protocol988",
  },
  icons: {
    icon: [{ url: "/icon.png" }, new URL("/icon.png", "https://example.com")],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [goerli, sepolia, zkSyncTestnet, scrollSepolia]
      : []),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className="h-full bg-white">
      <body suppressHydrationWarning={true} className="h-full">
        <ForwardContextProvider>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
              theme={darkTheme()}
              appInfo={demoAppInfo}
              chains={chains}
            >
              {pathname === "/" ? null : <Navbar />}
              <main className="-mt-24 pb-8">{children}</main>
              {pathname === "/" ? null : <Footer />}
            </RainbowKitProvider>
          </WagmiConfig>
        </ForwardContextProvider>
      </body>
    </html>
  );
}
