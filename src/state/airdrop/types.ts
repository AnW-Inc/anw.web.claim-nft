import { Contract } from 'ethers'

export interface AirdropState {
  loading: {
    loadingGetAirdropList: boolean
    loadingGetAirdropDetail: boolean
    loadingClaimAirdrop: boolean
  }
  total: number
  isRegistered: boolean
  isClaim: boolean
  airdropList: any
  airdropDetail: any
}

export interface AirdropProps {
  airdropContract?: Contract
  from?: number
  to?: number
  account?: string
  pagination: {
    page?: number
    limit?: number
  }
}
