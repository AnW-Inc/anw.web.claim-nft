import { Flex, HStack, Image } from '@chakra-ui/react'
import CustomHeading from 'components/CustomHeading'
import React from 'react'
interface IPageLoaderProps {
  isOpen?: boolean
}

const PageLoader: React.FunctionComponent<IPageLoaderProps> = (props) => {
  return (
    <Flex
      bg={'linear-gradient(166.15deg, rgb(0, 57, 63) -37.37%, rgb(24, 26, 28) 66.42%)'}
      position={'absolute'}
      width={'100vw'}
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <HStack gap={'20px'}>
        <Image maxH={'60px'} src="/logo.png" />
        <CustomHeading fontSize={{ base: '24px', md: '48px' }}>A&W NFT</CustomHeading>
      </HStack>
    </Flex>
  )
}

export default PageLoader
