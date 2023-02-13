import { createSelector } from '@reduxjs/toolkit'
import { initialClaimNFTState } from '.'
import { State } from '../types'

// First select the relevant part from the state
const selectDomain = (state: State) => state.claimNFT || initialClaimNFTState

export const selectLoading = createSelector([selectDomain], (claimNFTState) => claimNFTState.loading)
export const selectClaimNFTInfo = createSelector([selectDomain], (claimNFTState) => claimNFTState.claimNFTInfo)
