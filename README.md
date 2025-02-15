# @theothergothamdev/mexc-sdk

<!-- [START badges] -->

[![NPM version](https://img.shields.io/npm/v/@theothergothamdev/mexc-sdk.svg)](https://www.npmjs.com/package/@theothergothamdev/mexc-sdk)
[![NPM downloads](https://img.shields.io/npm/dm/@theothergothamdev/mexc-sdk.svg)](https://www.npmjs.com/package/@theothergothamdev/mexc-sdk)

![build](https://github.com/theothergothamdev/mexc-sdk-nodejs/actions/workflows/build.yml/badge.svg)

<!-- [END badges] -->

This is a fork of [mexc-api-sdk repository](https://github.com/mexcdevelop/mexc-api-sdk/). The original repository does not seem to be maintained and their code did not work for me. This forked repository keeps the same core SDK but I have cleaned up the code a little.

## Disclaimer

⚠️ This SDK is **not affiliated with or endorsed by MEXC**. Usage must comply with the usage and terms of the [MEXC API Terms](https://www.mexc.com/terms). The authors are not responsible for any misuse of the API. Use this SDK at your own risk.

## Installation

```bash
npm install @theothergothamdev/mexc-sdk
```

## Usage

```ts
import { Spot } from "@theothergothamdev/mexc-sdk";

const apiKey = "apiKey";
const apiSecret = "apiSecret";

const client = new Spot(apiKey, apiSecret);
```

## Support

If you find this project useful, consider giving it a ⭐ on GitHub! Your support helps keep development active. 🚀  

## Contributing

Contributions are welcome! If you find this project useful and would like to support its development, you can donate crypto at the addresses below.

| Crypto                    | Address                                      |
| ------------------------- | -------------------------------------------- |
| Binance Smart Chain (BSC) | 0x32a1511e239a4c28f5c75b52f16f34d59783c55e   |
| Ethereum (ETH)            | 0x32a1511e239a4c28f5c75b52f16f34d59783c55e   |
| Solana (SOL)              | GjCAtQni2NU9xpCvTBqQVL7wN9TdY9WXiXyQ3ZRiN6LR |

### Disclaimer
Donations are **voluntary and non-refundable**. Contributing funds does **not** grant any ownership, rights, or special privileges related to this project. This project is **not affiliated with DexScreener**. Please verify addresses before sending any funds, as transactions **cannot** be reversed.

**Note:** Donations are **anonymous** unless you notify us. If you’d like to be recognized, feel free to open an issue or reach out.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
