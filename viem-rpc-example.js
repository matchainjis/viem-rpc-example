import { defineChain } from "viem";
export const matchMain = defineChain({
    //Matchain
    id: 698,
    name: "Matchain",
    nativeCurrency: { name: "Match Coin", symbol: "BNB", decimals: 18 },
    rpcUrls: {
        default: {
            http: ["https://rpc.matchain.io"], // For more stable rpc url, read https://docs.matchain.io/development/private-rpc-providers
        },
    },
    blockExplorers: {
        default: {
            name: "Matchscan",
            url: "https://matchscan.io/",
            apiUrl: "https://matchscan.io/api",
        },
    },
    iconUrl: "https://matchscan.io/static/identicon_logos/blockies.png",
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
        }
    },
    // testnet: true,
});