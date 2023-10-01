import "./App.css";
import Header from "./components/Header";
import { WagmiConfig, configureChains, createConfig, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "react-toastify/dist/ReactToastify.css";
import Createpost from "./components/Createpost";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [
    infuraProvider({
      apiKey: "cf05af5bacf84b28aa67c6dea5d1d5c2",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "cellboard",
  projectId: "76599d5f0640bf1956cd2f793ee4aca8",
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
            <Header />
            <Createpost/>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
