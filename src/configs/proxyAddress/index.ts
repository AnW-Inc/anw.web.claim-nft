import { REACT_APP_BUILD_MODE } from 'configs/index'
import tokenAddress from './tokenAddress'

export interface Address {
  97?: string
  56: string
}

const { default: contractAddress } = require('configs/proxyAddress/' + REACT_APP_BUILD_MODE)
const proxyAddress = { ...tokenAddress, ...contractAddress }
export default proxyAddress
