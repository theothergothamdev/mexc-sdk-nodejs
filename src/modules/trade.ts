import { UserData } from "./userData";
import { formatData } from "../util";

export class Trade extends UserData {
  /**
   * Helper to validate required parameters
   * @param params
   */
  private validateRequiredParams(params: string[]) {
    if (params.some((param) => !param.trim())) {
      throw new Error("Some required parameters are missing");
    }
  }

  /**
   * Helper to perform a signed request and format the result
   * @param method - HTTP method (POST, GET, DELETE, etc.)
   * @param endpoint - API endpoint
   * @param params - Request parameters
   * @returns formatted data
   */
  private async signedRequestAndFormat(method: string, endpoint: string, params: any = {}) {
    const rawData = await this.signRequest(method, endpoint, params);
    return formatData(rawData);
  }

  /**
   * Test New Order
   *
   * @param symbol
   * @param side
   * @param orderType
   * @param options
   * @returns
   */
  public newOrderTest(symbol: string, side: string, orderType: string, options: any = {}) {
    this.validateRequiredParams([symbol, side, orderType]);

    return this.signedRequestAndFormat("POST", "/order/test", {
      symbol,
      side: side.toUpperCase(),
      type: orderType.toUpperCase(),
      ...options,
    });
  }

  /**
   * New Order
   *
   * @param symbol
   * @param side
   * @param orderType
   * @param options
   * @returns
   */
  public newOrder(symbol: string, side: string, orderType: string, options: any = {}) {
    this.validateRequiredParams([symbol, side, orderType]);

    return this.signedRequestAndFormat("POST", "/order", {
      symbol,
      side: side.toUpperCase(),
      type: orderType.toUpperCase(),
      ...options,
    });
  }

  /**
   * Cancel Order
   *
   * @param symbol
   * @param options
   * @returns
   */
  public cancelOrder(symbol: string, options: any = {}) {
    return this.signedRequestAndFormat("DELETE", "/order", {
      symbol,
      ...options,
    });
  }

  /**
   * Cancel all Open Orders on a Symbol
   *
   * @param symbol
   * @returns
   */
  public cancelOpenOrders(symbol: string) {
    return this.signedRequestAndFormat("DELETE", "/openOrders", {
      symbol,
    });
  }

  /**
   * Query Order
   *
   * @param symbol
   * @param options
   * @returns
   */
  public queryOrder(symbol: string, options: any = {}) {
    return this.signedRequestAndFormat("GET", "/order", {
      symbol,
      ...options,
    });
  }

  /**
   * Current Open Orders
   *
   * @param symbol
   * @returns
   */
  public openOrders(symbol: string) {
    return this.signedRequestAndFormat("GET", "/openOrders", {
      symbol,
    });
  }

  /**
   * All Orders
   *
   * @param symbol
   * @param options
   * @returns
   */
  public allOrders(symbol: string, options: any = { limit: 500 }) {
    return this.signedRequestAndFormat("GET", "/allOrders", {
      symbol,
      ...options,
    });
  }
}
