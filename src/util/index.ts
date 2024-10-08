interface RequestConfig {
  baseURL: string;
  method: string;
  url: string;
  headers: Record<string, string>;
}

export const createRequest = async (config: RequestConfig): Promise<any> => {
  const { baseURL, method, url, headers } = config;
  const response = await fetch(`${baseURL}${url}`, {
    method,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

export const stringifyKeyValuePair = ([key, value]: [string, string | number]): string => {
  return `${key}=${encodeURIComponent(String(value))}`;
};

export const removeEmptyValue = (obj: Record<string, any>): Record<string, any> => {
  if (typeof obj !== "object" || obj === null) return {};
  Object.keys(obj).forEach((key) => isEmptyValue(obj[key]) && delete obj[key]);
  return obj;
};

export const isEmptyValue = (input: any): boolean => {
  /**
   * input is considered empty value: falsy value (like null, undefined, '', except false and 0),
   * string with white space characters only, empty array, empty object
   */
  return (
    (!input && input !== false && input !== 0) ||
    (typeof input === "string" && !input.trim()) ||
    (Array.isArray(input) && input.length === 0) ||
    (typeof input === "object" && input !== null && Object.keys(input).length === 0)
  );
};

export const buildQueryString = (params: Record<string, any>): string => {
  if (!params) return "";
  return Object.entries(params).map(stringifyKeyValuePair).join("&");
};

export const formatData = (datas: any): any => {
  if (Array.isArray(datas)) {
    return datas.map((data) => formatData(data));
  } else if (typeof datas === "object" && datas !== null) {
    const newObj: Record<string, any> = {};
    Object.entries(datas).forEach(([key, value]) => {
      newObj[key] = formatData(value);
    });
    return newObj;
  } else {
    return datas === undefined || datas === null ? "" : datas;
  }
};
