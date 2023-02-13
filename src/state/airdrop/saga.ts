import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'
import { bigNumberToDecimal } from 'utils/bigNumber'
import { getDataRange } from 'utils/pagination'
import { toastError, toastSuccess } from 'utils/uiHelper'
import { airdropActions } from '.'
import { AirdropProps } from './types'

export function* getAirdropDetail(action: PayloadAction<AirdropProps>) {
  try {
    const { payload } = action
    const { airdropContract, account } = payload
    let airdropDetail = yield call(airdropContract.getInfoAirdrop, account)
    if (airdropDetail) {
      airdropDetail = {
        amount: bigNumberToDecimal(airdropDetail._amount),
        index: bigNumberToDecimal(airdropDetail._index),
        receiver: airdropDetail._receiver,
        timeClaim: bigNumberToDecimal(airdropDetail._timeClaim),
      }
    }

    if (airdropDetail.index > 0 && airdropDetail.amount === 0) {
      const amountClaim = yield call(airdropContract.amountClaim)
      airdropDetail.amount = bigNumberToDecimal(amountClaim)
    }

    yield put(
      airdropActions.getAirdropDetailSuccess({
        airdropDetail,
        isRegistered: Boolean(airdropDetail.index),
        isClaim: Boolean(airdropDetail.timeClaim),
      }),
    )
  } catch (error) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.message ?? (error as any)?.message,
    })
    yield put(airdropActions.getAirdropDetailFailed())
  }
}

export function* getAirdropList(action: PayloadAction<AirdropProps>) {
  try {
    const { payload } = action
    const { airdropContract, pagination } = payload
    const { limit = 10, page = 1 } = pagination
    let total = yield call(airdropContract._tokenIds)
    total = bigNumberToDecimal(total)
    const { from, to } = getDataRange(total, limit, page)
    let airdropList = []
    if (total > 0) {
      const amountClaim = yield call(airdropContract.amountClaim)
      airdropList = yield call(airdropContract.listInfoAirdrop, from, to)
      airdropList = airdropList.map(({ amount, receiver, timeClaim }) => ({
        amount: bigNumberToDecimal(amountClaim),
        receiver,
        timeClaim: bigNumberToDecimal(timeClaim),
      }))
    }
    yield put(airdropActions.getAirdropListSuccess({ total, airdropList }))
  } catch (error) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.message ?? (error as any)?.message,
    })
    yield put(airdropActions.getAirdropListFailed())
  }
}

export function* claimAirdrop(action: PayloadAction<AirdropProps>) {
  try {
    const { payload } = action
    const { airdropContract } = payload
    let data = yield call(airdropContract.claimAirdrop)
    const receipt = yield call(data.wait)
    const { status } = receipt
    if (status) {
      toastSuccess({
        title: 'Success',
        message: 'Airdrop has been claimed successfully.',
      })
      yield put(airdropActions.claimAirdropSuccess()) // turn off loading
      yield put(
        airdropActions.getAirdropList({
          airdropContract,
          pagination: {
            page: 1,
            limit: 10,
          },
        }),
      ) // fetch list again
    } else {
      throw new Error('Airdrop claiming failed.')
    }
  } catch (error) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.message ?? (error as any)?.message,
    })
    yield put(airdropActions.claimAirdropFailed())
  }
}

export default function* airdropSaga() {
  yield takeLatest(airdropActions.getAirdropDetail.type, getAirdropDetail)
  yield takeLatest(airdropActions.getAirdropList.type, getAirdropList)
  yield takeLatest(airdropActions.claimAirdrop.type, claimAirdrop)
}
