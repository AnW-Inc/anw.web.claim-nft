import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AirdropState } from './types'

export const initialState: AirdropState = {
  loading: {
    loadingGetAirdropList: false,
    loadingGetAirdropDetail: false,
    loadingClaimAirdrop: false,
  },
  total: 0,
  isRegistered: false,
  isClaim: false,
  airdropList: [],
  airdropDetail: {},
}

export const airdropSlice = createSlice({
  name: 'airdrop',
  initialState,
  reducers: {
    save(state, action: PayloadAction<Object>) {
      const { payload } = action
      return {
        ...state,
        ...payload,
      }
    },
    saveLoading(state, action: PayloadAction<Object>) {
      const { payload } = action
      state.loading = {
        ...state.loading,
        ...payload,
      }
    },

    // ============= get airdrop detail =============
    getAirdropDetail(state, action: PayloadAction<Object>) {
      state.loading.loadingGetAirdropDetail = true
    },
    getAirdropDetailSuccess(state, action: PayloadAction<Object>) {
      const { payload } = action
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingGetAirdropDetail: false,
        },
        ...payload,
      }
    },
    getAirdropDetailFailed(state, action: PayloadAction<string>) {
      state.loading.loadingGetAirdropDetail = false
    },

    // ============= get airdrop list =============
    getAirdropList(state, action: PayloadAction<Object>) {
      state.loading.loadingGetAirdropList = true
    },
    getAirdropListSuccess(state, action: PayloadAction<any>) {
      const {
        payload: { airdropList = [], total = 0 },
      } = action
      state.loading.loadingGetAirdropList = false
      state.airdropList = airdropList
      state.total = total
    },
    getAirdropListFailed(state, action: PayloadAction<string>) {
      state.loading.loadingGetAirdropList = false
    },

    // ============= claim airdrop =============
    claimAirdrop(state, action: PayloadAction<Object>) {
      state.loading.loadingClaimAirdrop = true
    },
    claimAirdropSuccess(state, action: PayloadAction<string>) {
      state.loading.loadingClaimAirdrop = false
      state.isClaim = true
    },
    claimAirdropFailed(state, action: PayloadAction<string>) {
      state.loading.loadingClaimAirdrop = false
    },
  },
})

const { reducer } = airdropSlice
export const { actions: airdropActions } = airdropSlice

export default reducer
