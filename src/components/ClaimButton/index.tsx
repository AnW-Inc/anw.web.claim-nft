import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import useInterval from 'hooks/useInterval'
import React, { useState } from 'react'
import Countdown from 'react-countdown'
import { useSelector } from 'react-redux'
import { selectClaimNFTInfo, selectLoading } from 'state/claimNFT/selectors'
dayjs.extend(customParseFormat)
dayjs.extend(timezone)
dayjs.extend(utc)

interface IClaimButtonProps {
  handleClaimNFT: any
}

const ClaimButton: React.FunctionComponent<IClaimButtonProps> = (props) => {
  const { handleClaimNFT } = props
  const { loadingClaimNFT } = useSelector(selectLoading)
  const claimNFTInfo = useSelector(selectClaimNFTInfo)
  const [claimDependence, setClaimDependence] = useState(false)
  const isTimeToClaim = () => {
    const today = dayjs(new Date())
    return today.isAfter(dayjs.unix(claimNFTInfo.timeClaim))
  }

  useInterval(() => {
    if (!claimDependence && isTimeToClaim()) {
      setClaimDependence(true)
    }
  }, 1000)

  if (!isTimeToClaim()) {
    return (
      <VStack>
        <Button w={'100%'} variant="primary2" disabled={true}>
          Minting...
        </Button>
        <Text pt={'24px'}>Mint After</Text>
        <Countdown
          date={dayjs.unix(claimNFTInfo.timeClaim).toDate()}
          renderer={({ formatted }) => {
            const { days, hours, minutes, seconds } = formatted
            return (
              <HStack
                color={'white'}
                spacing={{ base: '5px', md: '5px' }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Flex
                  w={{ base: '60px', md: '85px' }}
                  alignItems={'center'}
                  flexDir={'column'}
                  // p={'20px 12px'}
                  gap={'5px'}
                  fontSize={{ base: '14px', md: '14px' }}
                >
                  <Text>{days}</Text>
                  <Text>DAYS</Text>
                </Flex>
                <Flex
                  justify={'center'}
                  alignItems={'center'}
                  flexDir={'column'}
                  fontSize={{ base: '14px', md: '14px' }}
                >
                  <Text>&#8282;</Text>
                </Flex>
                <Flex
                  w={{ base: '60px', md: '85px' }}
                  alignItems={'center'}
                  flexDir={'column'}
                  // p={'20px 12px'}
                  gap={'5px'}
                  fontSize={{ base: '14px', md: '14px' }}
                >
                  <Text>{hours}</Text>
                  <Text>HOURS</Text>
                </Flex>
                <Flex
                  justify={'center'}
                  alignItems={'center'}
                  flexDir={'column'}
                  fontSize={{ base: '14px', md: '14px' }}
                >
                  <Text>&#8282;</Text>
                </Flex>
                <Flex
                  w={{ base: '60px', md: '85px' }}
                  alignItems={'center'}
                  flexDir={'column'}
                  // p={'20px 12px'}
                  gap={'5px'}
                  fontSize={{ base: '14px', md: '14px' }}
                >
                  <Text>{minutes}</Text>
                  <Text>MINUTES</Text>
                </Flex>
                <Flex
                  justify={'center'}
                  alignItems={'center'}
                  flexDir={'column'}
                  fontSize={{ base: '14px', md: '14px' }}
                >
                  <Text>&#8282;</Text>
                </Flex>
                <Flex
                  w={{ base: '60px', md: '85px' }}
                  alignItems={'center'}
                  flexDir={'column'}
                  // p={'20px 12px'}
                  gap={'5px'}
                  fontSize={{ base: '14px', md: '14px' }}
                >
                  <Text>{seconds}</Text>
                  <Text>SECONDS</Text>
                </Flex>
              </HStack>
            )
          }}
        />
      </VStack>
    )
  }

  return (
    <Button w={'100%'} isLoading={loadingClaimNFT} variant="primary2" onClick={() => handleClaimNFT()}>
      Mint
    </Button>
  )
}

export default React.memo(ClaimButton)
