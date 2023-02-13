export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export const BLOCKCHAIN_EXPLORE_URLS = {
  [ChainId.MAINNET]: 'https://bscscan.com',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://bscscan.com',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}

export enum BUILD_MODE {
  DEV = 'dev',
  PRODUCTION = 'production',
  STAGING = 'staging',
}

// ======================= env =======================
export const REACT_APP_BUILD_MODE = process.env.REACT_APP_BUILD_MODE || BUILD_MODE.DEV

export const REACT_APP_CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID, 10) || 97
export const REACT_APP_NODE_1 = process.env.REACT_APP_NODE_1 || 'https://data-seed-prebsc-1-s1.binance.org:8545'
export const REACT_APP_NODE_2 = process.env.REACT_APP_NODE_2 || 'https://data-seed-prebsc-1-s1.binance.org:8545'
export const REACT_APP_NODE_3 = process.env.REACT_APP_NODE_3 || 'https://data-seed-prebsc-1-s1.binance.org:8545'

export const REACT_APP_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:9031/api/v1'

export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[REACT_APP_CHAIN_ID]
