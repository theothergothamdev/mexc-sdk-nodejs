import { Base } from "./base";
import { formatData } from "../util";

export class Market extends Base {
  /**
   * Helper to perform a public API request and format the result
   * @param method - HTTP method (GET, POST, etc.)
   * @param endpoint - API endpoint
   * @param params - Query parameters
   * @returns formatted data
   */
  private async requestAndFormat(method: string, endpoint: string, params: any = {}) {
    const rawData = await this.publicRequest(method, endpoint, params);
    return formatData(rawData);
  }

  /**
   * Exchange Information
   *
   * @param options
   * ```
   * [options.symbol] - symbol(optional) ex: BTCUSDT.
   * [options.symbols] - for multiple symbols, add comma for each symbol in string. ex: BTCUSDT,BNBBTC.
   * ```
   * @returns
   */
  async exchangeInfo(options: any = {}) {
    return this.requestAndFormat("GET", "/exchangeInfo", options);
  }

  /**
   * Order Book
   *
   * @param symbol
   * @param options
   * ```
   * [options.limit] - Default 100; max 5000. Valid limits:[5, 10, 20, 50, 100, 500, 1000, 5000].
   * ```
   * @returns
   */
  async depth(symbol: string, options: any = { limit: 100 }) {
    return this.requestAndFormat("GET", "/depth", {
      symbol,
      ...options,
    });
  }

  /**
   * Recent Trades List
   *
   * @param symbol
   * @param options
   * ```
   * [options.limit] - limit(optional) Default 500; max 1000.
   * ```
   * @returns
   */
  async trades(symbol: string, options: any = { limit: 500 }) {
    return this.requestAndFormat("GET", "/trades", {
      symbol,
      ...options,
    });
  }

  /**
   * Old Trade Lookup
   *
   * @param symbol
   * @param options
   * ```
   * [options.limit] - limit(optional) Default 500; max 1000.
   * ```
   * @returns
   */
  async historicalTrades(symbol: string, options: any = { limit: 500 }) {
    return this.requestAndFormat("GET", "/historicalTrades", {
      symbol,
      ...options,
    });
  }

  /**
   * Compressed/Aggregate Trades List
   *
   * @param symbol
   * @param options
   * ```
   * [options.fromId] - id to get aggregate trades from INCLUSIVE.
   * [options.startTime] - Timestamp in ms to get aggregate trades from INCLUSIVE.
   * [options.endTime] - Timestamp in ms to get aggregate trades until INCLUSIVE.
   * [options.limit] - Default 500; max 1000.
   * ```
   * @returns
   */
  async aggTrades(symbol: string, options: any = { limit: 500 }) {
    return this.requestAndFormat("GET", "/aggTrades", {
      symbol,
      ...options,
    });
  }

  /**
   * Kline/Candlestick Data
   *
   * @param symbol
   * @param interval
   * @param options
   * ```
   * [options.startTime]
   * [options.endTime]
   * [options.limit] - Default 500; max 1000.
   * ```
   * @returns
   */
  async klines(symbol: string, interval: string, options: any = { limit: 500 }) {
    return this.requestAndFormat("GET", "/klines", {
      symbol,
      interval,
      ...options,
    });
  }

  /**
   * Current Average Price
   *
   * @param symbol
   */
  async avgPrice(symbol: string) {
    return this.requestAndFormat("GET", "/avgPrice", {
      symbol,
    });
  }

  /**
   * 24hr Ticker Price Change Statistics
   *
   * @param symbol
   */
  async ticker24hr(symbol: string) {
    return this.requestAndFormat("GET", "/ticker/24hr", { symbol });
  }

  /**
   * Symbol Price Ticker
   *
   * @param symbol
   */
  async tickerPrice(symbol: string) {
    return this.requestAndFormat("GET", "/ticker/price", { symbol });
  }

  /**
   * Symbol Order Book Ticker
   * @param symbol
   */
  async bookTicker(symbol: string) {
    return this.requestAndFormat("GET", "/ticker/bookTicker", { symbol });
  }
}
