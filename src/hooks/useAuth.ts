import { NoBscProviderError } from '@binance-chain/bsc-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { useCallback } from 'react'
import { toastError } from 'utils/uiHelper'
import { setupNetwork } from 'utils/wallet'
import { ConnectorNames, connectorsByName } from 'utils/web3React'

export const connectorLocalStorageKey = 'connectorIdv2'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(connector)
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              toastError({
                title: 'Error',
                message: 'No provider was found.',
              })
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector
                walletConnector.walletConnectProvider = null
              }
              toastError({
                title: 'Error',
                message: 'Please authorize to access your account.',
              })
            } else {
              toastError({
                title: 'Error',
                message: error.message,
              })
            }
          }
        })
      } else {
        // toastError(t('Unable to find connector'), t('The connector config is wrong'))
        toastError({
          title: 'Error',
          message: 'The connector config is wronguseCallback',
        })
      }

      localStorage.setItem(connectorLocalStorageKey, connectorID)
    },
    [activate],
  )

  const logout = useCallback(() => {
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
    window.localStorage.removeItem(connectorLocalStorageKey)
  }, [deactivate])

  return { login, logout }
}

export default useAuth
