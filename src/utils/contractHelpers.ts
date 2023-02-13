import { airdropAbi, bep20Abi, claimNFTAbi } from 'configs/abis'
import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
import { getAirdropAddress, getClaimNFTAddress } from './addressHelpers'

export const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getAirdropContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(airdropAbi, getAirdropAddress(), signer)
}

export const getClaimNFTContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(claimNFTAbi, getClaimNFTAddress(), signer)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
