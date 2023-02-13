import { Contract } from 'ethers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMemo } from 'react'
import { getAirdropContract, getBep20Contract, getClaimNFTContract } from 'utils/contractHelpers'

export const useAirdropContract = () => {
  const { account, library } = useActiveWeb3React()
  return useMemo(() => getAirdropContract(account ? library.getSigner() : library), [library, account])
}

export const useClaimNFTContract = () => {
  const { account, library } = useActiveWeb3React()
  return useMemo(() => getClaimNFTContract(account ? library.getSigner() : library), [library, account])
}

export function useTokenContract(tokenAddress?: string): Contract | null {
  const { account, library } = useActiveWeb3React()
  return useMemo(
    () => getBep20Contract(tokenAddress, account ? library.getSigner() : library),
    [library, account, tokenAddress],
  )
}
