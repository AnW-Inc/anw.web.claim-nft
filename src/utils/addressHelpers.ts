import contractAddress, { Address } from 'configs/proxyAddress'
import { ChainId, REACT_APP_CHAIN_ID } from 'configs/index'

export const getAddress = (address: Address): string => {
  const addressContract = address[REACT_APP_CHAIN_ID]
  if (addressContract) {
    return addressContract
  }
  return address[ChainId.MAINNET]
}

export const getAirdropAddress = () => {
  return getAddress(contractAddress.airdrop)
}

export const getClaimNFTAddress = () => {
  return getAddress(contractAddress.claimNFT)
}

export const getAnWNFTAddress = () => {
  return getAddress(contractAddress.anWNFT)
}

export const getUSDTTokenAddress = () => {
  return getAddress(contractAddress.USDTToken)
}
