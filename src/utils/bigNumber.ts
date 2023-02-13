import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

export type SerializedBigNumber = string

export const BIG_ZERO = new BigNumber(0)
export const BIG_ONE = new BigNumber(1)
export const BIG_NINE = new BigNumber(9)
export const BIG_TEN = new BigNumber(10)

export const ethersToSerializedBigNumber = (ethersBn: ethers.BigNumber): SerializedBigNumber =>
  ethersToBigNumber(ethersBn).toJSON()

export const ethersToBigNumber = (ethersBn: ethers.BigNumber): BigNumber => new BigNumber(ethersBn.toString())

export const decimalToBigNumber = (number: number | string): string => {
  if (number < 1000) {
    return new BigNumber(number).times(new BigNumber(10).pow(18)).toString()
  }
  return new BigNumber(number).toString() + new BigNumber(10).pow(18).toString().replace('1', '')
}

export const bigNumberToDecimal = (number: string): string => {
  return new BigNumber(number).div(new BigNumber(10).pow(18)).toString()
}
