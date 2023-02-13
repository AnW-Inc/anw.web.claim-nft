import { createSelector } from '@reduxjs/toolkit'
import { initialState } from '.'
import { State } from '../types'

// First select the relevant part from the state
const selectDomain = (state: State) => state.airdrop || initialState

export const selectLoading = createSelector([selectDomain], (airdropState) => airdropState.loading)
export const selectTotal = createSelector([selectDomain], (airdropState) => airdropState.total)
export const selectIsRegistered = createSelector([selectDomain], (airdropState) => airdropState.isRegistered)
export const selectIsClaim = createSelector([selectDomain], (airdropState) => airdropState.isClaim)
export const selectAirdropList = createSelector([selectDomain], (airdropState) => airdropState.airdropList)
export const selectAirdropDetail = createSelector([selectDomain], (airdropState) => airdropState.airdropDetail)
