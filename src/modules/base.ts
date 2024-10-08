import { createHmac } from "node:crypto";
import { buildQueryString, createRequest, removeEmptyValue } from "../util";

// Define types for the configuration and request methods
interface Config {
  apiKey: string;
  apiSecret: string;
  baseURL: string;
}

interface RequestConfig {
  method: string;
  baseURL: string;
  url: string;
  headers: Record<string, string>;
}

interface Params {
  [key: string]: string | number | undefined | null;
}

export class Base {
  public config: Config;

  constructor(apiKey: string, apiSecret: string) {
    this.config = {
      apiKey,
      apiSecret,
      baseURL: "https://api.mexc.com/api/v3",
    };
  }

  // publicRequest function with proper typings
  public async publicRequest(method: string, path: string, paramsObj: Params = {}): Promise<any> {
    const cleanedParams = removeEmptyValue(paramsObj);
    const queryString = buildQueryString(cleanedParams);

    if (queryString !== "") {
      path = `${path}?${queryString}`;
    }

    const requestConfig: RequestConfig = {
      method,
      baseURL: this.config.baseURL,
      url: path,
      headers: {
        "Content-Type": "application/json",
        "X-MEXC-APIKEY": this.config.apiKey,
      },
    };

    return await createRequest(requestConfig);
  }

  // signRequest function with proper typings
  public async signRequest(method: string, path: string, paramsObj: Params = {}): Promise<any> {
    const timestamp = Date.now();
    const cleanedParams = removeEmptyValue(paramsObj);
    const queryString = buildQueryString({ ...cleanedParams, timestamp });
    const signature = createHmac("sha256", this.config.apiSecret).update(queryString).digest("hex");

    const requestConfig: RequestConfig = {
      method,
      baseURL: this.config.baseURL,
      url: `${path}?${queryString}&signature=${signature}`,
      headers: {
        "Content-Type": "application/json",
        "X-MEXC-APIKEY": this.config.apiKey,
      },
    };

    return await createRequest(requestConfig);
  }
}
