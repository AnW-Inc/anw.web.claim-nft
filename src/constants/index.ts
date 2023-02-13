export const LOADER_CONTAINER = 'loader-container'

export const PHONE_REG_EXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const NAME_REG_EXP = /^[A-Za-z ]*$/

export const DEFAULT_ROLE = 'USER'

export const TOKEN_REG_EXP = /[0-9]{6,6}/
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/bplusmetaverse',
  YOUTUBE: 'https://www.youtube.com/channel/UCUVJUfnQaaofoejTG7HzFfQ',
  TELEGRAM: 'https://t.me/bplusmetaverseofficial',
}

export const DEFAULT_TAB_INDEX = {
  detail: 0,
  academy: 1,
  evolution: 2,
}

export const PRICE_TO_UP_RANK = {
  '1': 1,
  '2': 2,
  '3': 4,
  '4': 8,
  '5': 16,
  '6': 256,
  '7': 65536,
}

export const RANK_TO_INDEX = {
  D: 1,
  C: 2,
  B: 3,
  A: 4,
  S: 5,
  SS: 6,
  SSS: 7,
}

export enum BSCSCAN_LINK_TYPES {
  TRANSACTION = 'transaction',
  TOKEN = 'token',
  ADDRESS = 'address',
  BLOCK = 'block',
  COUNTDOWN = 'countdown',
}

export const DEFAULT_INCREASE_ALLOWANCE_VALUE = 1000000000
