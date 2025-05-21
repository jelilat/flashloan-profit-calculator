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
