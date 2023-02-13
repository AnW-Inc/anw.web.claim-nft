import { Contract } from 'ethers'

export interface ClaimNFTState {
  loading: {
    loadingClaimNFT: boolean
    loadingGetClaimNFTInfo: boolean
    loadingRegisterClaimNFT: boolean
  }
  claimNFTInfo: {
    timeClaim: number
    receiver: string
    index: number
    nftId: number
    ref: string
    yourRef: string
    totalRef: number
  }
}

export interface ClaimNFTProps {
  claimNFTContract?: Contract
  account?: string
  ref?: string
}
