import { Box } from '@chakra-ui/layout'
// import CoinInfo from 'components/CoinInfo'
import Header from 'components/Header'
import React from 'react'

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <Box as="main" mt={1} minH={'calc(100vh - 120px)'}>
        {props.children}
      </Box>
    </>
  )
}

export default MainLayout
