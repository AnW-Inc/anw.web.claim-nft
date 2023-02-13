import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ClaimNFTState } from './types'

export const initialClaimNFTState: ClaimNFTState = {
  loading: {
    loadingClaimNFT: false,
    loadingGetClaimNFTInfo: false,
    loadingRegisterClaimNFT: false,
  },
  claimNFTInfo: {
    timeClaim: 0,
    receiver: '',
    index: 0,
    nftId: 0,
    ref: '',
    yourRef: '',
    totalRef: 0,
  },
}

export const claimNFTSlice = createSlice({
  name: 'claimNFT',
  initialState: initialClaimNFTState,
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

    // ============= get claim detail =============
    getClaimNFTInfo(state, action: PayloadAction<Object>) {
      state.loading.loadingGetClaimNFTInfo = true
    },
    getClaimNFTInfoSuccess(state, action: PayloadAction<Object>) {
      const { payload } = action
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingGetClaimNFTInfo: false,
        },
        ...payload,
      }
    },
    getClaimNFTInfoFailed(state, action: PayloadAction<string>) {
      state.loading.loadingGetClaimNFTInfo = false
    },

    // ============= claim NFT =============
    claimNFT(state, action: PayloadAction<Object>) {
      state.loading.loadingClaimNFT = true
    },
    claimNFTSuccess(state, action: PayloadAction<string>) {
      state.loading.loadingClaimNFT = false
    },
    claimNFTFailed(state, action: PayloadAction<string>) {
      state.loading.loadingClaimNFT = false
    },

    // ============= Register claim NFT =============
    registerClaimNFT(state, action: PayloadAction<Object>) {
      state.loading.loadingRegisterClaimNFT = true
    },
    registerClaimNFTSuccess(state, action: PayloadAction<string>) {
      state.loading.loadingRegisterClaimNFT = false
    },
    registerClaimNFTFailed(state, action: PayloadAction<string>) {
      state.loading.loadingRegisterClaimNFT = false
    },
  },
})

const { reducer } = claimNFTSlice
export const { actions: claimNFTActions } = claimNFTSlice

export default reducer
