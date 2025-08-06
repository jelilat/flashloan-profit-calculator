// Known WETH address
export const WETH_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
export const ETH_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

// Set of WETH-like tokens
export const WETH_LIKE_TOKENS = new Set([WETH_ADDRESS]);

// Common WETH function signatures
export const WETH_FUNCTION_SIGNATURES = [
  "0xd0e30db0", // deposit()
  "0x2e1a7d4d", // withdraw(uint256)
  "0x3d18b912", // deposit(uint256)
  "0x7fcf532c", // Withdrawal(address,uint256)
  "0xe1fffcc4", // Deposit(address,uint256)
];

export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

export const FLASHLOAN_CONTRACTS = [
  {
    address: "0xba12222222228d8ba445958a75a0704d566bf2c8",
    name: "Balancer: Vault",
  },
  {
    address: "0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2",
    name: "Aave: Pool V3",
  },
  {
    address: "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
    name: "Aave: Lending Pool V2",
  },
  {
    address: "0x398eC7346DcD622eDc5ae82352F02bE94C62d119",
    name: "Aave: Lending Pool V1",
  },
  {
    address: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
    name: "Morpho",
  },
  {
    address: "0xC13e21B648A5Ee794902342038FF3aDAB66BE987",
    name: "Spark: SparkLend",
  },
];
