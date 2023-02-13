import { PayloadAction } from '@reduxjs/toolkit'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { toastError, toastSuccess } from 'utils/uiHelper'
import { claimNFTActions } from '.'
import { ClaimNFTProps } from './types'

export function* getClaimNFTInfo(action: PayloadAction<ClaimNFTProps>) {
  try {
    const { payload } = action
    const { claimNFTContract, account } = payload
    let claimNFTInfo = yield all([
      call(claimNFTContract.getInfoClaimNFT, account),
      call(claimNFTContract.refs, account),
      call(claimNFTContract.totalRefs, account),
    ])

    if (claimNFTInfo) {
      claimNFTInfo = {
        nftId: parseInt(claimNFTInfo[0]._nftId.toString(), 10),
        index: parseInt(claimNFTInfo[0]._index.toString(), 10),
        receiver: claimNFTInfo[0]._receiver,
        timeClaim: parseInt(claimNFTInfo[0]._timeClaim.toString(), 10),
        ref: claimNFTInfo[0]._ref,
        yourRef: claimNFTInfo[1],
        totalRef: parseInt(claimNFTInfo[2].toString(), 10),
      }
    }

    yield put(
      claimNFTActions.getClaimNFTInfoSuccess({
        claimNFTInfo,
      }),
    )
  } catch (error) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.message ?? (error as any)?.message,
    })
    yield put(claimNFTActions.getClaimNFTInfoFailed())
  }
}

export function* registerClaimNFT(action: PayloadAction<ClaimNFTProps>) {
  try {
    const { payload } = action
    const { claimNFTContract, ref } = payload
    let data = yield call(claimNFTContract.registerClaimNFT, ref)
    const receipt = yield call(data.wait)
    const { status } = receipt
    if (status) {
      toastSuccess({
        title: 'Success',
        message: 'Registered successfully.',
      })
      yield put(claimNFTActions.registerClaimNFTSuccess()) // turn off loading
    } else {
      throw new Error('Register failed.')
    }
  } catch (error) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.message ?? (error as any)?.message,
    })
    yield put(claimNFTActions.registerClaimNFTFailed())
  }
}

export function* claimNFT(action: PayloadAction<ClaimNFTProps>) {
  try {
    const { payload } = action
    const { claimNFTContract } = payload
    let data = yield call(claimNFTContract.claimNFT)
    const receipt = yield call(data.wait)
    const { status } = receipt
    if (status) {
      toastSuccess({
        title: 'Success',
        message: 'NFT has been minted successfully.',
      })
      yield put(claimNFTActions.claimNFTSuccess()) // turn off loading
    } else {
      throw new Error('Mint NFT failed.')
    }
  } catch (error) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.message ?? (error as any)?.message,
    })
    yield put(claimNFTActions.claimNFTFailed())
  }
}

export default function* nftSaga() {
  yield takeLatest(claimNFTActions.getClaimNFTInfo.type, getClaimNFTInfo)
  yield takeLatest(claimNFTActions.registerClaimNFT.type, registerClaimNFT)
  yield takeLatest(claimNFTActions.claimNFT.type, claimNFT)
}
