import { Common } from "./common";
import { formatData } from "../util";

export class UserData extends Common {
  /**
   * Account Information
   */
  public async accountInfo() {
    const data = await this.signRequest("GET", "/account");
    return formatData(data);
  }

  /**
   * Account Trade List
   *
   * @param symbol
   * @param options
   * ```
   * [options.orderId] - This can only be used in combination with symbol.
   * [options.startTime]
   * [options.endTime]
   * [options.fromId] - TradeId to fetch from. Default gets most recent trades.
   * [options.limit] - default: 500, Max: 1000
   * ```
   * @returns
   */
  public async accountTradeList(symbol: string, options: any = { limit: 500 }) {
    const data = await this.signRequest(
      "GET",
      "/myTrades",
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
      })
    );
    return formatData(data);
  }

  /**
   * Get Balance of a Specific Token
   *
   * @param token - The token symbol (e.g., "BTC", "USDT", etc.)
   * @returns Balance of the token
   */
  public async getTokenBalance(token: string) {
    const accountInfo = await this.accountInfo();
    const balance = accountInfo.balances.find(
      (bal: { asset: string; free: string; locked: string }) => bal.asset === token.toUpperCase()
    );

    if (!balance) {
      throw new Error(`Balance for token ${token} not found`);
    }

    return {
      asset: balance.asset,
      free: parseFloat(balance.free),
      locked: parseFloat(balance.locked),
    };
  }
}
