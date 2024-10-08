import { Market } from "./market";

export class Common extends Market {
  /**
   * Test Connectivity
   */
  public async ping() {
    const res = await this.publicRequest("GET", "/ping");
    return JSON.parse(res.getBody());
  }

  /**
   * Check Server Time
   */
  public async time() {
    const res = await this.publicRequest("GET", "/time");
    return JSON.parse(res.getBody());
  }
}
