import { BASE_BSC_SCAN_URL } from 'configs'
import { BSCSCAN_LINK_TYPES } from 'constants/index'

export const shortWalletAddress = (address = '', start = 5, end = 5) => {
  if (!address) return ''
  if (address.length <= start + end) return address
  return `${address.substring(0, start)}...${address.substring(address.length - end)}`
}

export const formatNumberToUSDT = (number, separator = ',') => {
  if (number !== 0 && !number) return ''
  if (number.toString().includes('.')) return `$${number}`
  const currency = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`)
  return `$${currency}`
}

/**
 * e.g: 1000 => 1,000
 * @param number
 * @param separator
 * @returns
 */
export const numberWithSeparator = (number, separator = ',') => {
  if (number !== 0 && !number) {
    return ''
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

export const getFullDisplayBalance = (number, displayDecimals?: number) => {
  return number.toFixed(displayDecimals)
}

export function getBscScanLink(data: string | number, type?: BSCSCAN_LINK_TYPES): string {
  switch (type) {
    case BSCSCAN_LINK_TYPES.TRANSACTION: {
      return `${BASE_BSC_SCAN_URL}/tx/${data}`
    }
    case BSCSCAN_LINK_TYPES.TOKEN: {
      return `${BASE_BSC_SCAN_URL}/token/${data}`
    }
    case BSCSCAN_LINK_TYPES.BLOCK: {
      return `${BASE_BSC_SCAN_URL}/block/${data}`
    }
    case BSCSCAN_LINK_TYPES.COUNTDOWN: {
      return `${BASE_BSC_SCAN_URL}/block/countdown/${data}`
    }
    default: {
      return `${BASE_BSC_SCAN_URL}/address/${data}`
    }
  }
}
