import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import airdropReducer from 'state/airdrop'
import claimNFTReducer from 'state/claimNFT'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    airdrop: airdropReducer,
    claimNFT: claimNFTReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
