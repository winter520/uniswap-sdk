import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  HTTEST = 256,
  HTMAIN = 128,
  BNBMAIN = 56,
  MATICMAIN = 137,
  XDAIMAIN = 100,
  FTMMAIN = 250,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

// ht-main
// export const FACTORY_ADDRESS = '0xed776e576809012fb43382b37f576efbe3ab3390'
// export const INIT_CODE_HASH = '0xec98d1c1effef474f0f28b71824109c8f50ec6e9eb7e62724f6fcdd7aa966ba0'

//ht-test
export const FACTORY_ADDRESS = '0x2302c14f2928bb9b68053320309b84db3702f89f'
export const INIT_CODE_HASH = '0xec98d1c1effef474f0f28b71824109c8f50ec6e9eb7e62724f6fcdd7aa966ba0'

//ftm,matic,xdai,bsc
// export const FACTORY_ADDRESS = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
// export const INIT_CODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

// eth-test
// export const FACTORY_ADDRESS = '0x5C487A8a1915655bB9863d59D2519c01C1A427d7'
// export const INIT_CODE_HASH = '0x114c9724259a17666131b2946e9649a7a5556f4be0899ae8fa0e3adc5d7ac247'

// eth-main
// export const FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
// export const INIT_CODE_HASH = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
