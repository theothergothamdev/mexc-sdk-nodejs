# @theothergothamdev/mexc-sdk

<!-- [START badges] -->

[![NPM version](https://img.shields.io/npm/v/@theothergothamdev/mexc-sdk.svg)](https://www.npmjs.com/package/@theothergothamdev/mexc-sdk)
[![NPM downloads](https://img.shields.io/npm/dm/@theothergothamdev/mexc-sdk.svg)](https://www.npmjs.com/package/@theothergothamdev/mexc-sdk)

![build](https://github.com/theothergothamdev/mexc-sdk-nodejs/actions/workflows/build.yml/badge.svg)

<!-- [END badges] -->

This is a fork of [mexc-api-sdk repository](https://github.com/mexcdevelop/mexc-api-sdk/). The original repository does not seem to be maintained and their code did not work for me. This forked repository keeps the same core SDK but I have cleaned up the code a little is now maintained by me.

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

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements. If you're feeling generous and want to send me a tip that'd also be welcome!

## Support

| Crypto                    | Address                                      |
| ------------------------- | -------------------------------------------- |
| Binance Smart Chain (BSC) | 0x32a1511e239a4c28f5c75b52f16f34d59783c55e   |
| Ethereum (ETH)            | 0x32a1511e239a4c28f5c75b52f16f34d59783c55e   |
| Solana (SOL)              | GjCAtQni2NU9xpCvTBqQVL7wN9TdY9WXiXyQ3ZRiN6LR |

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
