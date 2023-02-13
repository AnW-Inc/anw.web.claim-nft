import airdropSaga from 'state/airdrop/saga'
import claimNFTSaga from 'state/claimNFT/saga'

export default function* rootSaga() {
  yield* airdropSaga()
  yield* claimNFTSaga()
}
