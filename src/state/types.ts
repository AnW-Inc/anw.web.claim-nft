import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { AirdropState } from './airdrop/types'
import { ClaimNFTState } from './claimNFT/types'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface BigNumberToJson {
  type: 'BigNumber'
  hex: string
}

// Global state
export interface State {
  airdrop?: AirdropState
  claimNFT?: ClaimNFTState
}
