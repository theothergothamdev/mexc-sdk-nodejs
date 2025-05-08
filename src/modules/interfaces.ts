export enum KlineInterval {
  ONE_MINUTE = "1m",
  FIVE_MINUTES = "5m",
  FIFTEEN_MINUTES = "15m",
  THIRTY_MINUTES = "30m",
  SIXTY_MINUTES = "60m",
  FOUR_HOURS = "4h",
  ONE_DAY = "1d",
  ONE_WEEK = "1W",
  ONE_MONTH = "1M",
}

export type OrderType = "LIMIT" | "MARKET" | "LIMIT_MAKER" | "IMMEDIATE_OR_CANCEL" | "FILL_OR_KILL";

export interface ExchangeInfoOptions {
  symbol?: string;
  symbols?: string;
}

export interface DepthOptions {
  limit?: 5 | 10 | 20 | 50 | 100 | 500 | 1000 | 5000;
}

export interface TradesOptions {
  limit?: number;
}

export interface HistoricalTradesOptions {
  limit?: number;
}

export interface AggTradesOptions {
  symbol?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface KlinesOptions {
  symbol?: string;
  interval?: KlineInterval;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export interface ExchangeInfo {
  timezone: string;
  serverTime: number;
  rateLimits: any[]; // TODO: Replace 'any' with specific type
  exchangeFilters: any[]; // TODO: Replace 'any' with specific type
  symbols: SymbolInfo[];
}

interface SymbolInfo {
  symbol: string;
  status: "1" | "2" | "3"; // 1 - online, 2 - Pause, 3 - offline
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  baseCommissionPrecision: number;
  quoteCommissionPrecision: number;
  orderTypes: OrderType[];
  quoteOrderQtyMarketAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  permissions: string[];
  filters: any[]; // TODO: Replace 'any' with specific type
  maxQuoteAmount: string;
  makerCommission: string;
  takerCommission: string;
  quoteAmountPrecision: string;
  baseSizePrecision: string;
  quoteAmountPrecisionMarket: string;
  maxQuoteAmountMarket: string;
  tradeSideType: "1" | "2" | "3" | "4"; // 1 - All, 2 - Buy only, etc.
  fullName: string;
}

export interface TickerPrice {
  symbol: string;
  price: string;
}

export interface Ticker24hrPrice {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  prevClosePrice: string;
  lastPrice: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  count: string;
}

export interface BookTicker {
  symbol: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
}

export interface Time {
  serverTime: number;
}

export interface DefaultSymbols {
  data: string[];
  code: number;
  msg: string;
  timestamp: number;
}

export interface AggTrade {
  a: string;
  f: string;
  l: string;
  p: string;
  q: string;
  T: number;
  m: boolean;
  M: boolean;
}

export interface Trade {
  id: string;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
  tradeType: string;
}

export interface Depth {
  lastUpdateId: number;
  timestamp: number;
  bids: [string, string][];
  asks: [string, string][];
}

export interface AvgPrice {
  mins: number;
  price: string;
}
