import { useWeb3React } from '@web3-react/core'
import { DEFAULT_INCREASE_ALLOWANCE_VALUE } from 'constants/index'
import { useCallback, useEffect, useState } from 'react'
import { bigNumberToDecimal, decimalToBigNumber } from 'utils/bigNumber'
import { CustomError } from 'utils/errorHelper'
import { toastSuccess } from 'utils/uiHelper'
import { useTokenContract } from './useContract'

const useTokenAllowance = (tokenAddress: string, spenderAddress: string, dependency?: any) => {
  const { account } = useWeb3React()
  const TokenContract = useTokenContract(tokenAddress)
  const [allowance, setAllowance] = useState(0)

  const [loadingIncreaseAllowance, setLoadingIncreaseAllowance] = useState(false)
  const [loadingGetAllowance, setLoadingGetAllowance] = useState(false)
  /**
   * increase allowance with default value is DEFAULT_INCREASE_ALLOWANCE_VALUE = 1000000000
   */
  const increaseAllowance = useCallback(
    async (increaseAllowanceValue = DEFAULT_INCREASE_ALLOWANCE_VALUE) => {
      try {
        setLoadingIncreaseAllowance(true)
        const data = await TokenContract.increaseAllowance(spenderAddress, decimalToBigNumber(increaseAllowanceValue))

        const receipt = await data.wait()
        const { status } = receipt
        if (status) {
          toastSuccess({
            title: 'Success',
            message: 'Increase Allowance successfully.',
          })
          setAllowance(increaseAllowanceValue)
        } else {
          throw new CustomError('Failed avatar sale.')
        }
      } finally {
        setLoadingIncreaseAllowance(false)
      }
    },
    [TokenContract, spenderAddress],
  )

  useEffect(() => {
    // Retrieve Token allowance
    const fetch = async () => {
      try {
        setLoadingGetAllowance(true)
        const res = await TokenContract.allowance(account, spenderAddress)
        setAllowance(parseInt(bigNumberToDecimal(res.toString()), 10))
      } catch (e) {
        console.error(e)
      } finally {
        setLoadingGetAllowance(false)
      }
    }
    if (account) {
      fetch()
    }
  }, [account, spenderAddress, TokenContract, loadingIncreaseAllowance, dependency])

  return { allowance, increaseAllowance, loadingIncreaseAllowance, loadingGetAllowance }
}

export default useTokenAllowance
