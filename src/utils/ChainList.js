import ethCoin from "/cid/ethcoin.png";
import bitcoin from "/cid/bitcoin.png";
import bnb from "/cid/bnb.png";
import ton from "/cid/ton.png";
import polygon from "/cid/polygon.png";
import avalanche from "/cid/avalanche.png";
import tron from "/cid/tron.png";
import cronos from "/cid/cronos.png";
import arbitrum from "/cid/arbitrum.png";
import solana from "/cid/solana.png";

const chainList = [
  {
    name: "Solana",
    key: "SOL",
    image: solana,
  },
  {
    name: "Ethereum",
    key: "ETH",
    image: ethCoin,
  },
  {
    name: "Bitcoin",
    key: "BTC",
    image: bitcoin,
  },
  {
    name: "Polygon",
    key: "MATIC",
    image: polygon,
  },
  {
    name: "Tron",
    key: "TRX",
    image: tron,
  },
  {
    name: "Avalanche",
    key: "AVAX",
    image: avalanche,
  },
  {
    name: "BSC",
    key: "BNB",
    image: bnb,
  },
  {
    name: "Ton",
    key: "TON",
    image: ton,
  },
  {
    name: "Arbitrum",
    key: "ARB",
    image: arbitrum,
  },
];

export { chainList };
