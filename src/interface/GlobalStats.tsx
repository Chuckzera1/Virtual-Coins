export interface IGlobalStats {
  total?: number;
  totalCoins?: number;
  totalMarkets?: number;
  totalExchanges?: number;
  totalMarketCap?: number;
  total24hVolume?: number;
}

export interface IGlobalCoin {
  id?: number;
  uuid?: string;
  slug?: string;
  symbol?: string;
  name?: string;
  description?: string;
  color?: string;
  iconType?: string;
  iconUrl?: string;
  websiteUrl?: string;
  socials?: Link[];
  links?: Link[];
  confirmedSupply?: boolean;
  numberOfMarkets?: number;
  numberOfExchanges?: number;
  type?: string;
  volume?: number;
  marketCap?: number;
  price?: string;
  supply?: { circulating: string; total: string; confirmed: boolean };
  approvedSupply?: boolean;
  firstSeen?: number;
  listedAt?: number;
  change?: number;
  rank?: number;
  history?: string[];
  allTimeHigh?: AllTimeHigh;
  penalty?: boolean;
}

export interface AllTimeHigh {
  price?: string;
  timestamp?: number;
}

export interface Link {
  name?: string;
  type?: string;
  url?: string;
}

export type IGlobalCoinsType = IGlobalCoin;
