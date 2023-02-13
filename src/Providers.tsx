import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { getLibrary } from 'utils/web3React'
import { store } from './state'
import theme from './theme'
import 'theme/globals.scss'

interface IProvidersProps {}

const Providers: React.FunctionComponent<IProvidersProps> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <HelmetProvider>
          <ChakraProvider theme={theme} resetCSS={true}>
            {children}
          </ChakraProvider>
        </HelmetProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
