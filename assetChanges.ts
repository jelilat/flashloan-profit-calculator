import type { TransferLog, TraceCall } from "./types";

export const assetChanges = {
  assetChanges: [
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        symbol: "weth",
        name: "WETH",
        logo: "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
        decimals: 18,
        dollarValue: "2089.5",
      },
      type: "Transfer",
      from: "0xba12222222228d8ba445958a75a0704d566bf2c8",
      to: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      rawAmount: "0x7a18d05b882cd4",
      amount: "0.034367230326615252",
      dollarValue: "71.81032776746256906",
    },
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        symbol: "weth",
        name: "WETH",
        logo: "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
        decimals: 18,
        dollarValue: "2089.5",
      },
      type: "Transfer",
      from: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      to: "0x80596bf6a3467502557ce466933e8c4cba2e0b0b",
      rawAmount: "0x8be0d69155f8c",
      amount: "0.002460764620545932",
      dollarValue: "5.1417676746307249143",
    },
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        symbol: "weth",
        name: "WETH",
        logo: "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
        decimals: 18,
        dollarValue: "2089.5",
      },
      type: "Transfer",
      from: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      to: "0x775dcc0121e0a67801b849236207db3af0a97b0d",
      rawAmount: "0x715ac2f272cd48",
      amount: "0.03190646570606932",
      dollarValue: "66.66856009283184414",
    },
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0x49e833337ece7afe375e44f4e3e8481029218e5c",
        symbol: "value",
        name: "Value DeFi",
        logo: "https://coin-images.coingecko.com/coins/images/12525/large/value_logo_-_500x500.png?1696512338",
        decimals: 18,
        dollarValue: "0.012495630420744419",
      },
      type: "Transfer",
      from: "0x775dcc0121e0a67801b849236207db3af0a97b0d",
      to: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      rawAmount: "0x1274a028b4a6fa30610",
      amount: "5447.12247980489461096",
      dollarValue: "68.06522936417081876818",
    },
    {
      assetInfo: {
        standard: "ERC20",
        contractAddress: "0x45f24baeef268bb6d63aee5129015d69702bcdfa",
      },
      type: "Transfer",
      from: "0x49e833337ece7afe375e44f4e3e8481029218e5c",
      to: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      rawAmount: "0x1274a028b4a6fa30610",
    },
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0x49e833337ece7afe375e44f4e3e8481029218e5c",
        symbol: "value",
        name: "Value DeFi",
        logo: "https://coin-images.coingecko.com/coins/images/12525/large/value_logo_-_500x500.png?1696512338",
        decimals: 18,
        dollarValue: "0.012495630420744419",
      },
      type: "Burn",
      from: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      rawAmount: "0x1274a028b4a6fa30610",
      amount: "5447.12247980489461096",
      dollarValue: "68.06522936417081876818",
    },
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0x49e833337ece7afe375e44f4e3e8481029218e5c",
        symbol: "value",
        name: "Value DeFi",
        logo: "https://coin-images.coingecko.com/coins/images/12525/large/value_logo_-_500x500.png?1696512338",
        decimals: 18,
        dollarValue: "0.012495630420744419",
      },
      type: "Burn",
      from: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      rawAmount: "0x1274a028b4a6fa30610",
      amount: "5447.12247980489461096",
      dollarValue: "68.06522936417081876818",
    },
    {
      assetInfo: {
        standard: "ERC20",
        contractAddress: "0x45f24baeef268bb6d63aee5129015d69702bcdfa",
      },
      type: "Transfer",
      from: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      to: "0x10dd17ecfc86101eab956e0a443cab3e9c62d9b4",
      rawAmount: "0x1274a028b4a6fa30610",
    },
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        symbol: "weth",
        name: "WETH",
        logo: "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
        decimals: 18,
        dollarValue: "2089.5",
      },
      type: "Transfer",
      from: "0x10dd17ecfc86101eab956e0a443cab3e9c62d9b4",
      to: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      rawAmount: "0x7a18d05b882cd4",
      amount: "0.034367230326615252",
      dollarValue: "71.81032776746256906",
    },
    {
      assetInfo: {
        standard: "ERC20",
        type: "Fungible",
        contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        symbol: "weth",
        name: "WETH",
        logo: "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
        decimals: 18,
        dollarValue: "2089.5",
      },
      type: "Transfer",
      from: "0xa090fc409a9f25bf8e28257d42ef6904590c8984",
      to: "0xba12222222228d8ba445958a75a0704d566bf2c8",
      rawAmount: "0x7a18d05b882cd4",
      amount: "0.034367230326615252",
      dollarValue: "71.81032776746256906",
    },
  ],
};

export const logs: TransferLog[] = [
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
        type: "address",
        name: "src",
        indexed: true,
      },
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "dst",
        indexed: true,
      },
      {
        value: "2043516292425764096",
        type: "uint256",
        name: "wad",
        indexed: false,
      },
    ],
    raw: {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x0000000000000000000000004d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
      ],
      data: "0x0000000000000000000000000000000000000000000000001c5c073daec2cd00",
    },
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "src",
        indexed: true,
      },
      {
        value: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
        type: "address",
        name: "dst",
        indexed: true,
      },
      {
        value: "2043516292425764096",
        type: "uint256",
        name: "wad",
        indexed: false,
      },
    ],
    raw: {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x000000000000000000000000ba1333333333a1ba1108e8412f11850a5c319ba9",
      ],
      data: "0x0000000000000000000000000000000000000000000000001c5c073daec2cd00",
    },
  },
  {
    name: "Wrap",
    anonymous: false,
    inputs: [
      {
        value: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
        type: "address",
        name: "wrappedToken",
        indexed: true,
      },
      {
        value: "2043516292425764096",
        type: "uint256",
        name: "depositedUnderlying",
        indexed: false,
      },
      {
        value: "2016800408644693467",
        type: "uint256",
        name: "mintedShares",
        indexed: false,
      },
      {
        value:
          "0x00000000000000003a655dc266d4fb54000000000000000138655e06db5aa4ed",
        type: "bytes32",
        name: "bufferBalances",
        indexed: false,
      },
    ],
    raw: {
      address: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
      topics: [
        "0x3771d13c67011e31e12031c54bb59b0bf544a80b81d280a3711e172aa8b7f47b",
        "0x0000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
      ],
      data: "0x0000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000001bfd1d4944212ddb00000000000000003a655dc266d4fb54000000000000000138655e06db5aa4ed",
    },
  },
  {
    name: "Swap",
    anonymous: false,
    inputs: [
      {
        value: "0xc4ce391d82d164c166df9c8336ddf84206b2f812",
        type: "address",
        name: "pool",
        indexed: true,
      },
      {
        value: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
        type: "address",
        name: "tokenIn",
        indexed: true,
      },
      {
        value: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
        type: "address",
        name: "tokenOut",
        indexed: true,
      },
      {
        value: "2016800408644693467",
        type: "uint256",
        name: "amountIn",
        indexed: false,
      },
      {
        value: "1703372930948639549",
        type: "uint256",
        name: "amountOut",
        indexed: false,
      },
      {
        value: "20000000000000",
        type: "uint256",
        name: "swapFeePercentage",
        indexed: false,
      },
      {
        value: "40336008172894",
        type: "uint256",
        name: "swapFeeAmount",
        indexed: false,
      },
    ],
    raw: {
      address: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
      topics: [
        "0x0874b2d545cb271cdbda4e093020c452328b24af12382ed62c4d00f5c26709db",
        "0x000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812",
        "0x0000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
        "0x000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d29",
      ],
      data: "0x0000000000000000000000000000000000000000000000001bfd1d4944212ddb00000000000000000000000000000000000000000000000017a398a7e535ab3d000000000000000000000000000000000000000000000000000012309ce54000000000000000000000000000000000000000000000000000000024af7570555e",
    },
  },
  {
    name: "Unwrap",
    anonymous: false,
    inputs: [
      {
        value: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
        type: "address",
        name: "wrappedToken",
        indexed: true,
      },
      {
        value: "1703372930948639549",
        type: "uint256",
        name: "burnedShares",
        indexed: false,
      },
      {
        value: "1706736231805510546",
        type: "uint256",
        name: "withdrawnUnderlying",
        indexed: false,
      },
      {
        value:
          "0x000000000000000103b33495505d86e2000000000000000030b7e83566d30290",
        type: "bytes32",
        name: "bufferBalances",
        indexed: false,
      },
    ],
    raw: {
      address: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
      topics: [
        "0xeeb740c90bf2b18c9532eb7d473137767036d893dff3e009f32718f821b2a4c0",
        "0x000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d29",
      ],
      data: "0x00000000000000000000000000000000000000000000000017a398a7e535ab3d00000000000000000000000000000000000000000000000017af8b8f660e6392000000000000000103b33495505d86e2000000000000000030b7e83566d30290",
    },
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
        type: "address",
        name: "from",
        indexed: true,
      },
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "to",
        indexed: true,
      },
      {
        value: "1706736231805510546",
        type: "uint256",
        name: "value",
        indexed: false,
      },
    ],
    raw: {
      address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000ba1333333333a1ba1108e8412f11850a5c319ba9",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
      ],
      data: "0x00000000000000000000000000000000000000000000000017af8b8f660e6392",
    },
  },
  {
    name: "Approval",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "owner",
        indexed: true,
      },
      {
        value: "0xba12222222228d8ba445958a75a0704d566bf2c8",
        type: "address",
        name: "spender",
        indexed: true,
      },
      {
        value:
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
        type: "uint256",
        name: "value",
        indexed: false,
      },
    ],
    raw: {
      address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
      topics: [
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8",
      ],
      data: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    },
  },
  {
    name: "Swap",
    anonymous: false,
    inputs: [
      {
        value:
          "0x36be1e97ea98ab43b4debf92742517266f5731a3000200000000000000000466",
        type: "bytes32",
        name: "poolId",
        indexed: true,
      },
      {
        value: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
        type: "address",
        name: "tokenIn",
        indexed: true,
      },
      {
        value: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
        type: "address",
        name: "tokenOut",
        indexed: true,
      },
      {
        value: "1706736231805510546",
        type: "uint256",
        name: "amountIn",
        indexed: false,
      },
      {
        value: "12365930869187106889443",
        type: "uint256",
        name: "amountOut",
        indexed: false,
      },
    ],
    raw: {
      address: "0xba12222222228d8ba445958a75a0704d566bf2c8",
      topics: [
        "0x2170c741c41531aec20e7c107c24eecfdd15e69c9bb0a8dd37b1840b9e0b207b",
        "0x36be1e97ea98ab43b4debf92742517266f5731a3000200000000000000000466",
        "0x0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
        "0x00000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
      ],
      data: "0x00000000000000000000000000000000000000000000000017af8b8f660e639200000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
    },
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "from",
        indexed: true,
      },
      {
        value: "0xba12222222228d8ba445958a75a0704d566bf2c8",
        type: "address",
        name: "to",
        indexed: true,
      },
      {
        value: "1706736231805510546",
        type: "uint256",
        name: "value",
        indexed: false,
      },
    ],
    raw: {
      address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8",
      ],
      data: "0x00000000000000000000000000000000000000000000000017af8b8f660e6392",
    },
  },
  {
    name: "Approval",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "owner",
        indexed: true,
      },
      {
        value: "0xba12222222228d8ba445958a75a0704d566bf2c8",
        type: "address",
        name: "spender",
        indexed: true,
      },
      {
        value:
          "115792089237316195423570985008687907853269984665640564039455877271681324129389",
        type: "uint256",
        name: "value",
        indexed: false,
      },
    ],
    raw: {
      address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
      topics: [
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8",
      ],
      data: "0xffffffffffffffffffffffffffffffffffffffffffffffffe850747099f19c6d",
    },
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0xba12222222228d8ba445958a75a0704d566bf2c8",
        type: "address",
        name: "from",
        indexed: true,
      },
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "to",
        indexed: true,
      },
      {
        value: "12365930869187106889443",
        type: "uint256",
        name: "value",
        indexed: false,
      },
    ],
    raw: {
      address: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
      ],
      data: "0x00000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
    },
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
        type: "address",
        name: "src",
        indexed: true,
      },
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "dst",
        indexed: true,
      },
      {
        value: "2207468186189906985",
        type: "uint256",
        name: "wad",
        indexed: false,
      },
    ],
    raw: {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000508acdc358be2ed126b1441f0cff853dec49d40f",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
      ],
      data: "0x0000000000000000000000000000000000000000000000001ea2809ea2d34429",
    },
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "from",
        indexed: true,
      },
      {
        value: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
        type: "address",
        name: "to",
        indexed: true,
      },
      {
        value: "12365930869187106889443",
        type: "uint256",
        name: "value",
        indexed: false,
      },
    ],
    raw: {
      address: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x000000000000000000000000508acdc358be2ed126b1441f0cff853dec49d40f",
      ],
      data: "0x00000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
    },
  },
  {
    name: "Swap",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "sender",
        indexed: true,
      },
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "recipient",
        indexed: true,
      },
      {
        value: "12365930869187106889442",
        type: "int256",
        name: "amount0",
        indexed: false,
      },
      {
        value: "-2207468186189906985",
        type: "int256",
        name: "amount1",
        indexed: false,
      },
      {
        value: "1062940473455445764352313126",
        type: "uint160",
        name: "sqrtPriceX96",
        indexed: false,
      },
      {
        value: "92764867506365053818806",
        type: "uint128",
        name: "liquidity",
        indexed: false,
      },
      {
        value: "-86231",
        type: "int24",
        name: "tick",
        indexed: false,
      },
    ],
    raw: {
      address: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
      topics: [
        "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
      ],
      data: "0x00000000000000000000000000000000000000000000029e5bc3c00416f0dee2ffffffffffffffffffffffffffffffffffffffffffffffffe15d7f615d2cbbd70000000000000000000000000000000000000000036f3e6686f3d7ca17f107260000000000000000000000000000000000000000000013a4cb25b3b4e95c57b6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeaf29",
    },
  },
  {
    name: "ReserveDataUpdated",
    anonymous: false,
    inputs: [
      {
        value: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        type: "address",
        name: "reserve",
        indexed: true,
      },
      {
        value: "19053016004908859592623070",
        type: "uint256",
        name: "liquidityRate",
        indexed: false,
      },
      {
        value: "0",
        type: "uint256",
        name: "stableBorrowRate",
        indexed: false,
      },
      {
        value: "25931821930815081549366907",
        type: "uint256",
        name: "variableBorrowRate",
        indexed: false,
      },
      {
        value: "1042040603481719010505539757",
        type: "uint256",
        name: "liquidityIndex",
        indexed: false,
      },
      {
        value: "1066471029739087721870653292",
        type: "uint256",
        name: "variableBorrowIndex",
        indexed: false,
      },
    ],
    raw: {
      address: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
      topics: [
        "0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a",
        "0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      ],
      data: "0x0000000000000000000000000000000000000000000fc2a211370b6970a543de0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000157346e239d357bbe7867b0000000000000000000000000000000000000000035df4ae4e3f0832aa4840ad000000000000000000000000000000000000000003722a065de68344f8a7f76c",
    },
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "src",
        indexed: true,
      },
      {
        value: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
        type: "address",
        name: "dst",
        indexed: true,
      },
      {
        value: "2044538050571976978",
        type: "uint256",
        name: "wad",
        indexed: false,
      },
    ],
    raw: {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x0000000000000000000000004d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
      ],
      data: "0x0000000000000000000000000000000000000000000000001c5fa8864a1cc112",
    },
  },
  {
    name: "FlashLoan",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "target",
        indexed: true,
      },
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "initiator",
        indexed: false,
      },
      {
        value: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        type: "address",
        name: "asset",
        indexed: true,
      },
      {
        value: "2043516292425764096",
        type: "uint256",
        name: "amount",
        indexed: false,
      },
      {
        value: 0,
        type: "uint8",
        name: "interestRateMode",
        indexed: false,
      },
      {
        value: "1021758146212882",
        type: "uint256",
        name: "premium",
        indexed: false,
      },
      {
        value: 0,
        type: "uint16",
        name: "referralCode",
        indexed: true,
      },
    ],
    raw: {
      address: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
      topics: [
        "0xefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f0",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        "0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      ],
      data: "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000001c5c073daec2cd0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003a1489b59f412",
    },
  },
  {
    name: "Withdrawal",
    anonymous: false,
    inputs: [
      {
        value: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        type: "address",
        name: "src",
        indexed: true,
      },
      {
        value: "162930135617930007",
        type: "uint256",
        name: "wad",
        indexed: false,
      },
    ],
    raw: {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      topics: [
        "0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65",
        "0x000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
      ],
      data: "0x0000000000000000000000000000000000000000000000000242d81858b68317",
    },
  },
];

export const trace: TraceCall[] = [
  {
    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
    gas: "0xa4074",
    gasUsed: "0x9adad",
    to: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
    input:
      "0x42b0b77c000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd0000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000035d9f8f5b1b5ff59f0ffded0dab7c9bf97b075a5f86a5e7e3687d007fc5681757f3c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000000000c54d9fede04000c2000300022001e4cf7cc05ef829718b90d68788130eb4204faa3ed0c519000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca00000000000000000000000000000000000000000000000000000000000000001000060b231e37c3f35064d86a650b451e309f212581c85fc11beca36be1e97ea98ab43b4debf92742517266f5731a30002000000000000000004660000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f04002c0100000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f508acdc358be2ed126b1441f0cff853dec49d40f000000",
    calls: [
      {
        from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
        gas: "0xa0391",
        gasUsed: "0x99955",
        to: "0x9aeb8aaa1ca38634aa8c0c8933e7fb4d61091327",
        input:
          "0x42b0b77c000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd0000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000035d9f8f5b1b5ff59f0ffded0dab7c9bf97b075a5f86a5e7e3687d007fc5681757f3c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000000000c54d9fede04000c2000300022001e4cf7cc05ef829718b90d68788130eb4204faa3ed0c519000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca00000000000000000000000000000000000000000000000000000000000000001000060b231e37c3f35064d86a650b451e309f212581c85fc11beca36be1e97ea98ab43b4debf92742517266f5731a30002000000000000000004660000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f04002c0100000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f508acdc358be2ed126b1441f0cff853dec49d40f000000",
        calls: [
          {
            from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
            gas: "0x9b8bd",
            gasUsed: "0x975cb",
            to: "0x34039100cc9584ae5d741d322e16d0d18cee8770",
            input:
              "0xa1fe0e8df81d8d79f42adb4c73cc3aa0c78e25d3343882d0313c0b80ece3d3a103ef1ebf0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd0000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000035d9f8f5b1b5ff59f0ffded0dab7c9bf97b075a5f86a5e7e3687d007fc5681757f3c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000000000c54d9fede04000c2000300022001e4cf7cc05ef829718b90d68788130eb4204faa3ed0c519000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca00000000000000000000000000000000000000000000000000000000000000001000060b231e37c3f35064d86a650b451e309f212581c85fc11beca36be1e97ea98ab43b4debf92742517266f5731a30002000000000000000004660000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f04002c0100000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f508acdc358be2ed126b1441f0cff853dec49d40f000000",
            calls: [
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0x9702e",
                gasUsed: "0x3e0b",
                to: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                input: "0x18160ddd",
                output:
                  "0x00000000000000000000000000000000000000000001d2deef1391ad0bdaa413",
                calls: [
                  {
                    from: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                    gas: "0x9374c",
                    gasUsed: "0x2a72",
                    to: "0x7effd7b47bfd17e52fb7559d3f924201b9dbff3d",
                    input: "0x18160ddd",
                    output:
                      "0x00000000000000000000000000000000000000000001d2deef1391ad0bdaa413",
                    calls: [
                      {
                        from: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                        gas: "0x900a1",
                        gasUsed: "0x170d",
                        to: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                        input:
                          "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        output:
                          "0x0000000000000000000000000000000000000000035df4ae478c110f44416aad",
                        calls: [
                          {
                            from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                            gas: "0x8daa8",
                            gasUsed: "0x14e5",
                            to: "0x9aeb8aaa1ca38634aa8c0c8933e7fb4d61091327",
                            input:
                              "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                            output:
                              "0x0000000000000000000000000000000000000000035df4ae478c110f44416aad",
                            value: "0x0",
                            type: "DELEGATECALL",
                          },
                        ],
                        type: "STATICCALL",
                      },
                    ],
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                ],
                type: "STATICCALL",
              },
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0x919df",
                gasUsed: "0x41ce",
                to: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                input:
                  "0x4efecaa5000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000001c5c073daec2cd00",
                calls: [
                  {
                    from: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                    gas: "0x8f39e",
                    gasUsed: "0x3fc6",
                    to: "0x7effd7b47bfd17e52fb7559d3f924201b9dbff3d",
                    input:
                      "0x4efecaa5000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000001c5c073daec2cd00",
                    calls: [
                      {
                        from: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                        gas: "0x8c337",
                        gasUsed: "0x323e",
                        to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        input:
                          "0xa9059cbb000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000001c5c073daec2cd00",
                        output:
                          "0x0000000000000000000000000000000000000000000000000000000000000001",
                        value: "0x0",
                        type: "CALL",
                      },
                    ],
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                ],
                value: "0x0",
                type: "CALL",
              },
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0x8ce42",
                gasUsed: "0x7b1ee",
                to: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                input:
                  "0x1b11d0ff000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000000003a1489b59f412000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000035d9f8f5b1b5ff59f0ffded0dab7c9bf97b075a5f86a5e7e3687d007fc5681757f3c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000000000c54d9fede04000c2000300022001e4cf7cc05ef829718b90d68788130eb4204faa3ed0c519000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca00000000000000000000000000000000000000000000000000000000000000001000060b231e37c3f35064d86a650b451e309f212581c85fc11beca36be1e97ea98ab43b4debf92742517266f5731a30002000000000000000004660000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f04002c0100000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f508acdc358be2ed126b1441f0cff853dec49d40f000000",
                output:
                  "0x0000000000000000000000000000000000000000000000000000000000000001",
                calls: [
                  {
                    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                    gas: "0x89b46",
                    gasUsed: "0x4c699",
                    to: "0x01e4cf7cc05ef829718b90d68788130eb4204faa",
                    input:
                      "0x3ed0c519000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca00000000000000000000000000000000000000000000000000000000000000001",
                    output:
                      "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000001c5c073daec2cd00000000000000000000000000000000000000000000000000000000000000",
                    calls: [
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x86bdf",
                        gasUsed: "0x216",
                        to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        input:
                          "0x70a08231000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        output:
                          "0x0000000000000000000000000000000000000000000000001c5c073daec2cd01",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x85d40",
                        gasUsed: "0xa9d",
                        to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        input:
                          "0xdd62ed3e000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000000000000022d473030f116ddee9f6b43ac78ba3",
                        output:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x84ee5",
                        gasUsed: "0x2cd",
                        to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        input:
                          "0xdd62ed3e000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000000000000022d473030f116ddee9f6b43ac78ba3",
                        output:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x83da0",
                        gasUsed: "0xbc8",
                        to: "0x000000000022d473030f116ddee9f6b43ac78ba3",
                        input:
                          "0x927da105000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                        output:
                          "0x000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000ffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x82d1e",
                        gasUsed: "0x3f8",
                        to: "0x000000000022d473030f116ddee9f6b43ac78ba3",
                        input:
                          "0x927da105000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                        output:
                          "0x000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000ffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x81139",
                        gasUsed: "0x45a78",
                        to: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                        input:
                          "0x286f580d00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000067de46f30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000001c5c073daec2cd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
                        output:
                          "0x000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000017af8b8f660e639200000000000000000000000000000000000000000000000000000000000000010000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000017af8b8f660e6392",
                        calls: [
                          {
                            from: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                            gas: "0x7d1f2",
                            gasUsed: "0x42f55",
                            to: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                            input:
                              "0x48c89491000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000002e408a465f60000000000000000000000000000000000000000000000000000000000000020000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000067de46f3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000001c5c073daec2cd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                            output:
                              "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000017af8b8f660e639200000000000000000000000000000000000000000000000000000000000000010000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000017af8b8f660e6392",
                            calls: [
                              {
                                from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                gas: "0x7add4",
                                gasUsed: "0x425de",
                                to: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                                input:
                                  "0x08a465f60000000000000000000000000000000000000000000000000000000000000020000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000067de46f3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000001c5c073daec2cd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f812000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
                                output:
                                  "0x000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000017af8b8f660e639200000000000000000000000000000000000000000000000000000000000000010000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000017af8b8f660e6392",
                                calls: [
                                  {
                                    from: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                                    gas: "0x77e75",
                                    gasUsed: "0x24d8",
                                    to: "0x000000000022d473030f116ddee9f6b43ac78ba3",
                                    input:
                                      "0x36c78516000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000ba1333333333a1ba1108e8412f11850a5c319ba90000000000000000000000000000000000000000000000001c5c073daec2cd00000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                    calls: [
                                      {
                                        from: "0x000000000022d473030f116ddee9f6b43ac78ba3",
                                        gas: "0x75c1d",
                                        gasUsed: "0x2021",
                                        to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                        input:
                                          "0x23b872dd000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000ba1333333333a1ba1108e8412f11850a5c319ba90000000000000000000000000000000000000000000000001c5c073daec2cd00",
                                        output:
                                          "0x0000000000000000000000000000000000000000000000000000000000000001",
                                        value: "0x0",
                                        type: "CALL",
                                      },
                                    ],
                                    value: "0x0",
                                    type: "CALL",
                                  },
                                  {
                                    from: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                                    gas: "0x758d3",
                                    gasUsed: "0x1f21",
                                    to: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                    input:
                                      "0x15afd409000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000001c5c073daec2cd00",
                                    output:
                                      "0x0000000000000000000000000000000000000000000000001c5c073daec2cd00",
                                    calls: [
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x72fff",
                                        gasUsed: "0x216",
                                        to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                        input:
                                          "0x70a08231000000000000000000000000ba1333333333a1ba1108e8412f11850a5c319ba9",
                                        output:
                                          "0x00000000000000000000000000000000000000000000001041395cbc6a070954",
                                        type: "STATICCALL",
                                      },
                                    ],
                                    value: "0x0",
                                    type: "CALL",
                                  },
                                  {
                                    from: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                                    gas: "0x734d7",
                                    gasUsed: "0xa3ab",
                                    to: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                    input:
                                      "0x43583be5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce90000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000000000000000000000",
                                    output:
                                      "0x0000000000000000000000000000000000000000000000001bfd1d4944212ddb0000000000000000000000000000000000000000000000001c5c073daec2cd000000000000000000000000000000000000000000000000001bfd1d4944212ddb",
                                    calls: [
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x6f91a",
                                        gasUsed: "0x1cd9",
                                        to: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                        input: "0x38d52e0f",
                                        output:
                                          "0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                        calls: [
                                          {
                                            from: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                            gas: "0x6ca61",
                                            gasUsed: "0x991",
                                            to: "0x23db508559ca053eee7f21b94dac803353560b4f",
                                            input: "0x38d52e0f",
                                            output:
                                              "0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                            value: "0x0",
                                            type: "DELEGATECALL",
                                          },
                                        ],
                                        type: "STATICCALL",
                                      },
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x6d7a8",
                                        gasUsed: "0x3a27",
                                        to: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                        input:
                                          "0xef8b30f70000000000000000000000000000000000000000000000001c5c073daec2ccff",
                                        output:
                                          "0x0000000000000000000000000000000000000000000000001bfd1d4944212ddc",
                                        calls: [
                                          {
                                            from: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                            gas: "0x6babf",
                                            gasUsed: "0x3870",
                                            to: "0x23db508559ca053eee7f21b94dac803353560b4f",
                                            input:
                                              "0xef8b30f70000000000000000000000000000000000000000000000001c5c073daec2ccff",
                                            output:
                                              "0x0000000000000000000000000000000000000000000000001bfd1d4944212ddc",
                                            calls: [
                                              {
                                                from: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                                gas: "0x6933e",
                                                gasUsed: "0x28e1",
                                                to: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                input:
                                                  "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                                output:
                                                  "0x000000000000000000000000000000000000000003462353e4181cbd8ccf9b88",
                                                calls: [
                                                  {
                                                    from: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                    gas: "0x6656e",
                                                    gasUsed: "0x14e5",
                                                    to: "0xc405a0eab071a085a832f876d8e5be7cfeafb624",
                                                    input:
                                                      "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                                    output:
                                                      "0x000000000000000000000000000000000000000003462353e4181cbd8ccf9b88",
                                                    value: "0x0",
                                                    type: "DELEGATECALL",
                                                  },
                                                ],
                                                type: "STATICCALL",
                                              },
                                            ],
                                            value: "0x0",
                                            type: "DELEGATECALL",
                                          },
                                        ],
                                        type: "STATICCALL",
                                      },
                                    ],
                                    value: "0x0",
                                    type: "CALL",
                                  },
                                  {
                                    from: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                                    gas: "0x68b11",
                                    gasUsed: "0x25ac9",
                                    to: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                    input:
                                      "0x2bfb780c00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c4ce391d82d164c166df9c8336ddf84206b2f8120000000000000000000000000fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d290000000000000000000000000000000000000000000000001bfd1d4944212ddb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000",
                                    output:
                                      "0x00000000000000000000000000000000000000000000000017a398a7e535ab3d0000000000000000000000000000000000000000000000001bfd1d4944212ddb00000000000000000000000000000000000000000000000017a398a7e535ab3d",
                                    calls: [
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x61843",
                                        gasUsed: "0x1171",
                                        to: "0xf4b5d1c22f35a460b91edd7f33cefe619e2faaf4",
                                        input: "0x679aefce",
                                        output:
                                          "0x0000000000000000000000000000000000000000000000000e0fc679b3173614",
                                        calls: [
                                          {
                                            from: "0xf4b5d1c22f35a460b91edd7f33cefe619e2faaf4",
                                            gas: "0x5fe8c",
                                            gasUsed: "0xf30",
                                            to: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                            input:
                                              "0x07a2d13a0000000000000000000000000000000000000000000000000de0b6b3a7640000",
                                            output:
                                              "0x0000000000000000000000000000000000000000000000000e0fc679b3173614",
                                            calls: [
                                              {
                                                from: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                                gas: "0x5e508",
                                                gasUsed: "0xd79",
                                                to: "0x23db508559ca053eee7f21b94dac803353560b4f",
                                                input:
                                                  "0x07a2d13a0000000000000000000000000000000000000000000000000de0b6b3a7640000",
                                                output:
                                                  "0x0000000000000000000000000000000000000000000000000e0fc679b3173614",
                                                calls: [
                                                  {
                                                    from: "0x0fe906e030a44ef24ca8c7dc7b7c53a6c4f00ce9",
                                                    gas: "0x5ca79",
                                                    gasUsed: "0x7ad",
                                                    to: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                    input:
                                                      "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                                    output:
                                                      "0x000000000000000000000000000000000000000003462353e4181cbd8ccf9b88",
                                                    calls: [
                                                      {
                                                        from: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                        gas: "0x5b11a",
                                                        gasUsed: "0x545",
                                                        to: "0xc405a0eab071a085a832f876d8e5be7cfeafb624",
                                                        input:
                                                          "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                                        output:
                                                          "0x000000000000000000000000000000000000000003462353e4181cbd8ccf9b88",
                                                        value: "0x0",
                                                        type: "DELEGATECALL",
                                                      },
                                                    ],
                                                    type: "STATICCALL",
                                                  },
                                                ],
                                                value: "0x0",
                                                type: "DELEGATECALL",
                                              },
                                            ],
                                            type: "STATICCALL",
                                          },
                                        ],
                                        type: "STATICCALL",
                                      },
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x5ddda",
                                        gasUsed: "0xeac4",
                                        to: "0xcdaa68ce322728fe4185a60f103c194f1e2c47bc",
                                        input: "0x679aefce",
                                        output:
                                          "0x00000000000000000000000000000000000000000000000010a67bc3754f0ae4",
                                        calls: [
                                          {
                                            from: "0xcdaa68ce322728fe4185a60f103c194f1e2c47bc",
                                            gas: "0x5b356",
                                            gasUsed: "0x9c35",
                                            to: "0x72d07d7dca67b8a406ad1ec34ce969c90bfee768",
                                            input: "0x679aefce",
                                            output:
                                              "0x000000000000000000000000000000000000000000000000109e1572f30629b5",
                                            calls: [
                                              {
                                                from: "0x72d07d7dca67b8a406ad1ec34ce969c90bfee768",
                                                gas: "0x59138",
                                                gasUsed: "0x9035",
                                                to: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                                input: "0x035faf82",
                                                output:
                                                  "0x000000000000000000000000000000000000000000000000109e1572f30629b5",
                                                calls: [
                                                  {
                                                    from: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                                    gas: "0x56740",
                                                    gasUsed: "0x7baf",
                                                    to: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
                                                    input:
                                                      "0x7a28fb880000000000000000000000000000000000000000000000000de0b6b3a7640000",
                                                    output:
                                                      "0x000000000000000000000000000000000000000000000000109e1572f30629b5",
                                                    calls: [
                                                      {
                                                        from: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
                                                        gas: "0x53504",
                                                        gasUsed: "0x2047",
                                                        to: "0xb8ffc3cd6e7cf5a098a1c92f48009765b24088dc",
                                                        input:
                                                          "0xbe00bbd8f1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f3ca7c3e38968823ccb4c78ea688df41356f182ae1d159e4ee608d30d68cef320",
                                                        output:
                                                          "0x00000000000000000000000017144556fd3424edc8fc8a4c940b2d04936d17eb",
                                                        calls: [
                                                          {
                                                            from: "0xb8ffc3cd6e7cf5a098a1c92f48009765b24088dc",
                                                            gas: "0x4f94e",
                                                            gasUsed: "0xb04",
                                                            to: "0x2b33cf282f867a7ff693a66e11b0fcc5552e4425",
                                                            input:
                                                              "0xbe00bbd8f1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f3ca7c3e38968823ccb4c78ea688df41356f182ae1d159e4ee608d30d68cef320",
                                                            output:
                                                              "0x00000000000000000000000017144556fd3424edc8fc8a4c940b2d04936d17eb",
                                                            value: "0x0",
                                                            type: "DELEGATECALL",
                                                          },
                                                        ],
                                                        value: "0x0",
                                                        type: "CALL",
                                                      },
                                                      {
                                                        from: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
                                                        gas: "0x4f70d",
                                                        gasUsed: "0x31ef",
                                                        to: "0x17144556fd3424edc8fc8a4c940b2d04936d17eb",
                                                        input:
                                                          "0x7a28fb880000000000000000000000000000000000000000000000000de0b6b3a7640000",
                                                        output:
                                                          "0x000000000000000000000000000000000000000000000000109e1572f30629b5",
                                                        value: "0x0",
                                                        type: "DELEGATECALL",
                                                      },
                                                    ],
                                                    type: "STATICCALL",
                                                  },
                                                ],
                                                type: "STATICCALL",
                                              },
                                            ],
                                            type: "STATICCALL",
                                          },
                                          {
                                            from: "0xcdaa68ce322728fe4185a60f103c194f1e2c47bc",
                                            gas: "0x50e7a",
                                            gasUsed: "0x2e70",
                                            to: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                            input:
                                              "0x07a2d13a0000000000000000000000000000000000000000000000000de0b6b3a7640000",
                                            output:
                                              "0x0000000000000000000000000000000000000000000000000de7ba7e87bc428d",
                                            calls: [
                                              {
                                                from: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                                gas: "0x4f105",
                                                gasUsed: "0x24e9",
                                                to: "0x23db508559ca053eee7f21b94dac803353560b4f",
                                                input:
                                                  "0x07a2d13a0000000000000000000000000000000000000000000000000de0b6b3a7640000",
                                                output:
                                                  "0x0000000000000000000000000000000000000000000000000de7ba7e87bc428d",
                                                calls: [
                                                  {
                                                    from: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                                    gas: "0x4d296",
                                                    gasUsed: "0x174d",
                                                    to: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                    input:
                                                      "0xd15e00530000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                                    output:
                                                      "0x0000000000000000000000000000000000000000033cd05a328de1b12afc0ea0",
                                                    calls: [
                                                      {
                                                        from: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                        gas: "0x4bd16",
                                                        gasUsed: "0x14e5",
                                                        to: "0xc405a0eab071a085a832f876d8e5be7cfeafb624",
                                                        input:
                                                          "0xd15e00530000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                                        output:
                                                          "0x0000000000000000000000000000000000000000033cd05a328de1b12afc0ea0",
                                                        value: "0x0",
                                                        type: "DELEGATECALL",
                                                      },
                                                    ],
                                                    type: "STATICCALL",
                                                  },
                                                ],
                                                value: "0x0",
                                                type: "DELEGATECALL",
                                              },
                                            ],
                                            type: "STATICCALL",
                                          },
                                        ],
                                        type: "STATICCALL",
                                      },
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x487d1",
                                        gasUsed: "0x3f6c",
                                        to: "0xc4ce391d82d164c166df9c8336ddf84206b2f812",
                                        input:
                                          "0x72c98186000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c5be211d181c33800000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000136f1efcc3f8f88516b9e94110d56fdbfb1778d10000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000003b83973c65b587a98e00000000000000000000000000000000000000000000005dc25da85c52bcf9760000000000000000000000000000000000000000000000000000000000000000",
                                        output:
                                          "0x0000000000000000000000000000000000000000000000001c5c99536fed4f4e",
                                        value: "0x0",
                                        type: "CALL",
                                      },
                                    ],
                                    value: "0x0",
                                    type: "CALL",
                                  },
                                  {
                                    from: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                                    gas: "0x433d3",
                                    gasUsed: "0x4d89",
                                    to: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                    input:
                                      "0x43583be500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000775f661b0bd1739349b9a2a3ef60be277c5d2d2900000000000000000000000000000000000000000000000017a398a7e535ab3d0000000000000000000000000000000000000000000000000000000000000000",
                                    output:
                                      "0x00000000000000000000000000000000000000000000000017af8b8f660e639200000000000000000000000000000000000000000000000017a398a7e535ab3d00000000000000000000000000000000000000000000000017af8b8f660e6392",
                                    calls: [
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x41568",
                                        gasUsed: "0x375",
                                        to: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                        input: "0x38d52e0f",
                                        output:
                                          "0x0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                        calls: [
                                          {
                                            from: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                            gas: "0x4038b",
                                            gasUsed: "0x1c1",
                                            to: "0x23db508559ca053eee7f21b94dac803353560b4f",
                                            input: "0x38d52e0f",
                                            output:
                                              "0x0000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                            value: "0x0",
                                            type: "DELEGATECALL",
                                          },
                                        ],
                                        type: "STATICCALL",
                                      },
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x40cf5",
                                        gasUsed: "0xf02",
                                        to: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                        input:
                                          "0x4cdad50600000000000000000000000000000000000000000000000017a398a7e535ab3c",
                                        output:
                                          "0x00000000000000000000000000000000000000000000000017af8b8f660e6393",
                                        calls: [
                                          {
                                            from: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                            gas: "0x3fb37",
                                            gasUsed: "0xd4b",
                                            to: "0x23db508559ca053eee7f21b94dac803353560b4f",
                                            input:
                                              "0x4cdad50600000000000000000000000000000000000000000000000017a398a7e535ab3c",
                                            output:
                                              "0x00000000000000000000000000000000000000000000000017af8b8f660e6393",
                                            calls: [
                                              {
                                                from: "0x775f661b0bd1739349b9a2a3ef60be277c5d2d29",
                                                gas: "0x3e87d",
                                                gasUsed: "0x7ad",
                                                to: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                input:
                                                  "0xd15e00530000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                                output:
                                                  "0x0000000000000000000000000000000000000000033cd05a328de1b12afc0ea0",
                                                calls: [
                                                  {
                                                    from: "0x4e033931ad43597d96d6bcc25c280717730b58b1",
                                                    gas: "0x3d6a6",
                                                    gasUsed: "0x545",
                                                    to: "0xc405a0eab071a085a832f876d8e5be7cfeafb624",
                                                    input:
                                                      "0xd15e00530000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                                    output:
                                                      "0x0000000000000000000000000000000000000000033cd05a328de1b12afc0ea0",
                                                    value: "0x0",
                                                    type: "DELEGATECALL",
                                                  },
                                                ],
                                                type: "STATICCALL",
                                              },
                                            ],
                                            value: "0x0",
                                            type: "DELEGATECALL",
                                          },
                                        ],
                                        type: "STATICCALL",
                                      },
                                    ],
                                    value: "0x0",
                                    type: "CALL",
                                  },
                                  {
                                    from: "0x136f1efcc3f8f88516b9e94110d56fdbfb1778d1",
                                    gas: "0x3d247",
                                    gasUsed: "0x5164",
                                    to: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                    input:
                                      "0xae6393290000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca0000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000000000000000000000000000017af8b8f660e6392",
                                    calls: [
                                      {
                                        from: "0xba1333333333a1ba1108e8412f11850a5c319ba9",
                                        gas: "0x3a767",
                                        gasUsed: "0x32a8",
                                        to: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                                        input:
                                          "0xa9059cbb000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000000000000000000000000000017af8b8f660e6392",
                                        output:
                                          "0x0000000000000000000000000000000000000000000000000000000000000001",
                                        value: "0x0",
                                        type: "CALL",
                                      },
                                    ],
                                    value: "0x0",
                                    type: "CALL",
                                  },
                                ],
                                value: "0x0",
                                type: "CALL",
                              },
                            ],
                            value: "0x0",
                            type: "CALL",
                          },
                        ],
                        value: "0x0",
                        type: "CALL",
                      },
                    ],
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                  {
                    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                    gas: "0x3da40",
                    gasUsed: "0x13d58",
                    to: "0xb231e37c3f35064d86a650b451e309f212581c85",
                    input:
                      "0xfc11beca36be1e97ea98ab43b4debf92742517266f5731a30002000000000000000004660000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
                    output:
                      "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000210000000000000000000000000000000000000000000000000017af8b8f660e639200000000000000000000000000000000000000000000000000000000000000",
                    calls: [
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x3c6f8",
                        gasUsed: "0x216",
                        to: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                        input:
                          "0x70a08231000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        output:
                          "0x00000000000000000000000000000000000000000000000017af8b8f660e6393",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x3c032",
                        gasUsed: "0x1d3c",
                        to: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                        input:
                          "0x095ea7b3000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                        output:
                          "0x0000000000000000000000000000000000000000000000000000000000000001",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x3a03a",
                        gasUsed: "0x27e",
                        to: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                        input:
                          "0xdd62ed3e000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c8",
                        output:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x38968",
                        gasUsed: "0xf82a",
                        to: "0xba12222222228d8ba445958a75a0704d566bf2c8",
                        input:
                          "0x52bbbe2900000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000067de46f336be1e97ea98ab43b4debf92742517266f5731a300020000000000000000046600000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f00000000000000000000000000000000000000000000000017af8b8f660e639200000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000",
                        output:
                          "0x00000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
                        calls: [
                          {
                            from: "0xba12222222228d8ba445958a75a0704d566bf2c8",
                            gas: "0x3346a",
                            gasUsed: "0x1eb5",
                            to: "0x36be1e97ea98ab43b4debf92742517266f5731a3",
                            input:
                              "0x9d2c110c00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000399ba5de444304c6b20000000000000000000000000000000000000000000671858c0ddb90cb4e646400000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f39c581f595b53c5cb19bd0b3f8da6c935e2ca000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f00000000000000000000000000000000000000000000000017af8b8f660e639236be1e97ea98ab43b4debf92742517266f5731a30002000000000000000004660000000000000000000000000000000000000000000000000000000001513923000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000000",
                            output:
                              "0x00000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
                            value: "0x0",
                            type: "CALL",
                          },
                          {
                            from: "0xba12222222228d8ba445958a75a0704d566bf2c8",
                            gas: "0x2f491",
                            gasUsed: "0x2a80",
                            to: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
                            input:
                              "0x23b872dd000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c800000000000000000000000000000000000000000000000017af8b8f660e6392",
                            output:
                              "0x0000000000000000000000000000000000000000000000000000000000000001",
                            value: "0x0",
                            type: "CALL",
                          },
                          {
                            from: "0xba12222222228d8ba445958a75a0704d566bf2c8",
                            gas: "0x2bb73",
                            gasUsed: "0x31cf",
                            to: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
                            input:
                              "0xa9059cbb000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
                            output:
                              "0x0000000000000000000000000000000000000000000000000000000000000001",
                            value: "0x0",
                            type: "CALL",
                          },
                        ],
                        value: "0x0",
                        type: "CALL",
                      },
                    ],
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                  {
                    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                    gas: "0x2946d",
                    gasUsed: "0x16cbd",
                    to: "0x5c250dde39085735d282be02e9af164d5618145d",
                    input:
                      "0x0100000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f508acdc358be2ed126b1441f0cff853dec49d40f",
                    calls: [
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x286ba",
                        gasUsed: "0x25d",
                        to: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
                        input:
                          "0x70a08231000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        output:
                          "0x00000000000000000000000000000000000000000000029e5bc3c00416f0dee4",
                        value: "0x0",
                        type: "CALL",
                      },
                      {
                        from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                        gas: "0x2714c",
                        gasUsed: "0x152cf",
                        to: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
                        input:
                          "0x128acb08000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000029e5bc3c00416f0dee200000000000000000000000000000000000000000000000000000001000276a400000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f00000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
                        output:
                          "0x00000000000000000000000000000000000000000000029e5bc3c00416f0dee2ffffffffffffffffffffffffffffffffffffffffffffffffe15d7f615d2cbbd7",
                        calls: [
                          {
                            from: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
                            gas: "0x1849d",
                            gasUsed: "0x2a6e",
                            to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                            input:
                              "0xa9059cbb000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000001ea2809ea2d34429",
                            output:
                              "0x0000000000000000000000000000000000000000000000000000000000000001",
                            value: "0x0",
                            type: "CALL",
                          },
                          {
                            from: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
                            gas: "0x15772",
                            gasUsed: "0xa2d",
                            to: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
                            input:
                              "0x70a08231000000000000000000000000508acdc358be2ed126b1441f0cff853dec49d40f",
                            output:
                              "0x0000000000000000000000000000000000000000000178b4868e5c0b94626667",
                            type: "STATICCALL",
                          },
                          {
                            from: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
                            gas: "0x14a71",
                            gasUsed: "0x1dd2",
                            to: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                            input:
                              "0xfa461e3300000000000000000000000000000000000000000000029e5bc3c00416f0dee2ffffffffffffffffffffffffffffffffffffffffffffffffe15d7f615d2cbbd70000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000004000000000000000000000000044108f0223a3c3028f5fe7aec7f9bb2e66bef82f00000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
                            calls: [
                              {
                                from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                                gas: "0x13f96",
                                gasUsed: "0x173f",
                                to: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
                                input:
                                  "0xa9059cbb000000000000000000000000508acdc358be2ed126b1441f0cff853dec49d40f00000000000000000000000000000000000000000000029e5bc3c00416f0dee3",
                                output:
                                  "0x0000000000000000000000000000000000000000000000000000000000000001",
                                value: "0x0",
                                type: "CALL",
                              },
                            ],
                            value: "0x0",
                            type: "CALL",
                          },
                          {
                            from: "0x508acdc358be2ed126b1441f0cff853dec49d40f",
                            gas: "0x12a9d",
                            gasUsed: "0x25d",
                            to: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
                            input:
                              "0x70a08231000000000000000000000000508acdc358be2ed126b1441f0cff853dec49d40f",
                            output:
                              "0x000000000000000000000000000000000000000000017b52e2521c0fab53454a",
                            type: "STATICCALL",
                          },
                        ],
                        value: "0x0",
                        type: "CALL",
                      },
                    ],
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                  {
                    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                    gas: "0x129c7",
                    gasUsed: "0x216",
                    to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    input:
                      "0x70a08231000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                    output:
                      "0x0000000000000000000000000000000000000000000000001ea2809ea2d3442a",
                    value: "0x0",
                    type: "CALL",
                  },
                  {
                    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
                    gas: "0x123c5",
                    gasUsed: "0xa9d",
                    to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    input:
                      "0xdd62ed3e000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b0000000000000000000000000087870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                    output:
                      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                    value: "0x0",
                    type: "CALL",
                  },
                ],
                value: "0x0",
                type: "CALL",
              },
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0x117ff",
                gasUsed: "0x1d2c",
                to: "0xea51d7853eefb32b6ee06b1c12e6dcca88be0ffe",
                input: "0xb1bf962d",
                output:
                  "0x000000000000000000000000000000000000000000017a69e98d771c248d095c",
                calls: [
                  {
                    from: "0xea51d7853eefb32b6ee06b1c12e6dcca88be0ffe",
                    gas: "0x1005e",
                    gasUsed: "0x973",
                    to: "0xac725cb59d16c81061bdea61041a8a5e73da9ec6",
                    input: "0xb1bf962d",
                    output:
                      "0x000000000000000000000000000000000000000000017a69e98d771c248d095c",
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                ],
                type: "STATICCALL",
              },
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0xb426",
                gasUsed: "0xb6b",
                to: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                input: "0x18160ddd",
                output:
                  "0x00000000000000000000000000000000000000000001d2deef1391ad0bdaa413",
                calls: [
                  {
                    from: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                    gas: "0xaf81",
                    gasUsed: "0x966",
                    to: "0x7effd7b47bfd17e52fb7559d3f924201b9dbff3d",
                    input: "0x18160ddd",
                    output:
                      "0x00000000000000000000000000000000000000000001d2deef1391ad0bdaa413",
                    calls: [
                      {
                        from: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                        gas: "0xaa56",
                        gasUsed: "0x5a1",
                        to: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                        input:
                          "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        output:
                          "0x0000000000000000000000000000000000000000035df4ae478c110f44416aad",
                        calls: [
                          {
                            from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                            gas: "0xa5b6",
                            gasUsed: "0x379",
                            to: "0x9aeb8aaa1ca38634aa8c0c8933e7fb4d61091327",
                            input:
                              "0xd15e0053000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                            output:
                              "0x0000000000000000000000000000000000000000035df4ae478c110f44416aad",
                            value: "0x0",
                            type: "DELEGATECALL",
                          },
                        ],
                        type: "STATICCALL",
                      },
                    ],
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                ],
                type: "STATICCALL",
              },
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0x89c0",
                gasUsed: "0x1649",
                to: "0x9ec6f08190dea04a54f8afc53db96134e5e3fdfb",
                input:
                  "0xb90db31b0000000000000000000000000000000000000000000000000002d479093ad9190000000000000000000000000000000000000000000000001c5fa8864a1cc11200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000193913894d96c3909bf7600000000000000000000000000000000000000000000000000000000000005dc000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000003f4fa48bab5afb44cdae",
                output:
                  "0x0000000000000000000000000000000000000000000fc2a211370b6970a543de000000000000000000000000000000000000000000157346e239d357bbe7867b",
                type: "STATICCALL",
              },
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0x6244",
                gasUsed: "0xd61",
                to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                input:
                  "0x23b872dd000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000004d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e80000000000000000000000000000000000000000000000001c5fa8864a1cc112",
                output:
                  "0x0000000000000000000000000000000000000000000000000000000000000001",
                value: "0x0",
                type: "CALL",
              },
              {
                from: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
                gas: "0x52eb",
                gasUsed: "0x470",
                to: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                input:
                  "0x6fd97676000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000001c5fa8864a1cc112",
                calls: [
                  {
                    from: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
                    gas: "0x4fa0",
                    gasUsed: "0x242",
                    to: "0x7effd7b47bfd17e52fb7559d3f924201b9dbff3d",
                    input:
                      "0x6fd97676000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b000000000000000000000000000000000000000000000000001c5fa8864a1cc112",
                    value: "0x0",
                    type: "DELEGATECALL",
                  },
                ],
                value: "0x0",
                type: "CALL",
              },
            ],
            value: "0x0",
            type: "DELEGATECALL",
          },
        ],
        value: "0x0",
        type: "DELEGATECALL",
      },
    ],
    value: "0x0",
    type: "CALL",
  },
  {
    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
    gas: "0xb6c2",
    gasUsed: "0x216",
    to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    input:
      "0x70a08231000000000000000000000000ba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
    output:
      "0x0000000000000000000000000000000000000000000000000242d81858b68318",
    value: "0x0",
    type: "CALL",
  },
  {
    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
    gas: "0xb117",
    gasUsed: "0x23eb",
    to: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    input:
      "0x2e1a7d4d0000000000000000000000000000000000000000000000000242d81858b68317",
    calls: [
      {
        from: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        gas: "0x8fc",
        gasUsed: "0x37",
        to: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
        input: "0x",
        value: "0x242d81858b68317",
        type: "CALL",
      },
    ],
    value: "0x0",
    type: "CALL",
  },
  {
    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
    gas: "0x6894",
    gasUsed: "0x0",
    to: "0xa0d5a274f95decb536bbbaa922d6d0fb692a627d",
    input: "0x",
    value: "0x1d28c617282b882",
    type: "CALL",
  },
  {
    from: "0xba58c9b54acb83e66b8b58ed31e7b5e3adc74b00",
    gas: "0x4cf8",
    gasUsed: "0x0",
    to: "0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97",
    input: "0x",
    value: "0x704bb6e633ca95",
    type: "CALL",
  },
];
