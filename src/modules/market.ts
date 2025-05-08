import { Base } from "./base";
import { formatData } from "../util";

import type {
  ExchangeInfoOptions,
  DepthOptions,
  TradesOptions,
  HistoricalTradesOptions,
  AggTradesOptions,
  KlinesOptions,
  ExchangeInfo,
  TickerPrice,
  Ticker24hrPrice,
  BookTicker,
  Time,
  DefaultSymbols,
  AggTrade,
  Trade,
  Depth,
  AvgPrice,
  KlineInterval,
} from "./interfaces";

export class Market extends Base {
  /**
   * Helper to perform a public API request and format the result
   */
  private async requestAndFormat(method: string, endpoint: string, params: any = {}) {
    const rawData = await this.publicRequest(method, endpoint, params);
    return formatData(rawData);
  }

  /**
   * Exchange Information
   */
  async exchangeInfo(options: ExchangeInfoOptions = {}): Promise<ExchangeInfo> {
    return this.requestAndFormat("GET", "/exchangeInfo", options);
  }

  /**
   * Order Book
   */
  async depth(symbol: string, options: DepthOptions = { limit: 100 }): Promise<Depth> {
    return this.requestAndFormat("GET", "/depth", {
      symbol,
      ...options,
    });
  }

  /**
   * Recent Trades List
   */
  async trades(symbol: string, options: TradesOptions = { limit: 500 }): Promise<Trade[]> {
    return this.requestAndFormat("GET", "/trades", {
      symbol,
      ...options,
    });
  }

  /**
   * Old Trade Lookup
   */
  async historicalTrades(symbol: string, options: HistoricalTradesOptions = { limit: 500 }): Promise<Trade[]> {
    return this.requestAndFormat("GET", "/historicalTrades", {
      symbol,
      ...options,
    });
  }

  /**
   * Compressed/Aggregate Trades List
   *
   */
  async aggTrades(symbol: string, options: AggTradesOptions = { limit: 500 }): Promise<AggTrade[]> {
    return this.requestAndFormat("GET", "/aggTrades", {
      symbol,
      ...options,
    });
  }

  /**
   * Kline/Candlestick Data
   */
  async klines(symbol: string, interval: KlineInterval, options: KlinesOptions = { limit: 500 }) {
    return this.requestAndFormat("GET", "/klines", {
      symbol,
      interval,
      ...options,
    });
  }

  /**
   * Current Average Price
   */
  async avgPrice(symbol: string): Promise<AvgPrice> {
    return this.requestAndFormat("GET", "/avgPrice", {
      symbol,
    });
  }

  /**
   * 24hr Ticker Price Change Statistics
   */
  async ticker24hr(symbol: string): Promise<Ticker24hrPrice> {
    return this.requestAndFormat("GET", "/ticker/24hr", { symbol });
  }

  /**
   * Symbol Price Ticker
   */
  async tickerPrice(symbol: string): Promise<TickerPrice> {
    return this.requestAndFormat("GET", "/ticker/price", { symbol });
  }

  /**
   * Symbol Order Book Ticker
   */
  async bookTicker(symbol: string): Promise<BookTicker> {
    return this.requestAndFormat("GET", "/ticker/bookTicker", { symbol });
  }

  async defaultSymbols(symbol: string): Promise<DefaultSymbols> {
    return this.requestAndFormat("GET", "/defaultSymbols", { symbol });
  }

  async ping(): Promise<{}> {
    return this.requestAndFormat("GET", "/ping");
  }

  async time(): Promise<Time> {
    return this.requestAndFormat("GET", "/time");
  }
}
