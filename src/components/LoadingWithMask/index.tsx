import * as React from 'react'
import { Flex } from '@chakra-ui/layout'
import Loading from 'components/Loading'
interface ILoadingWithMaskProps {}

const LoadingWithMask: React.FunctionComponent<ILoadingWithMaskProps> = (props) => {
  return (
    <Flex
      bg="rgba(0,0,0,0.5)"
      top="0"
      left="0"
      zIndex="9999"
      justify="center"
      align="center"
      position="fixed"
      w="100vw"
      h="100vh"
    >
      <Loading />
    </Flex>
  )
}

export default LoadingWithMask
