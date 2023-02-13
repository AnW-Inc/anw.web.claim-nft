/* eslint-disable react-hooks/exhaustive-deps */
import { CopyIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import ClaimButton from 'components/ClaimButton'
import CopyItem, { copyText } from 'components/CopyItem'
import CustomHeading from 'components/CustomHeading'
import Wallet from 'components/Wallet'
import { ChainId, REACT_APP_CHAIN_ID } from 'configs'
import dayjs from 'dayjs'
import { useClaimNFTContract } from 'hooks/useContract'
import useQuery from 'hooks/useQuery'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
import { claimNFTActions, initialClaimNFTState } from 'state/claimNFT'
import { selectClaimNFTInfo, selectLoading } from 'state/claimNFT/selectors'
import { useAppDispatch } from 'state/hooks'
import { getAnWNFTAddress } from 'utils/addressHelpers'
import { getBscScanLink, shortWalletAddress } from 'utils/utils'
import { BENEFITS } from './utils'

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()
  const claimNFTContract = useClaimNFTContract()

  const [mintedNFTCount, setMintedNFTCount] = useState(0)
  const [userBalance, setUserBalance] = useState(0) // USDT
  const [isClaim, setIsClaim] = useState(true)
  const { loadingClaimNFT, loadingRegisterClaimNFT, loadingGetClaimNFTInfo } = useSelector(selectLoading)
  const claimNFTInfo = useSelector(selectClaimNFTInfo)
  const ref = useQuery('ref') || ''

  const [indexAccordion, setIndexAccordion] = useState(0)

  const handleRegisterClaimNFT = useCallback(() => {
    dispatch(
      claimNFTActions.registerClaimNFT({
        claimNFTContract,
        ref,
      }),
    )
  }, [claimNFTContract, mintedNFTCount, userBalance])

  const handleClaimNFT = useCallback(() => {
    dispatch(
      claimNFTActions.claimNFT({
        claimNFTContract,
      }),
    )
  }, [claimNFTContract])

  const getShareUrl = () => {
    return window.location.href
  }

  const getReferralUrl = () => {
    return `${window.location.origin}${window.location.pathname}?ref=${claimNFTInfo.yourRef}`
  }

  const _renderButton = () => {
    if (!isClaim) {
      return (
        <Button w={'100%'} disabled isLoading={loadingClaimNFT} variant="primary">
          Campaign Ended
        </Button>
      )
    }

    if (!account) {
      return <Wallet w={'full'} />
    }

    if (claimNFTInfo.index <= 0) {
      return (
        <Button
          w={'100%'}
          onClick={() => handleRegisterClaimNFT()}
          isLoading={loadingRegisterClaimNFT || loadingGetClaimNFTInfo}
          variant="primary2"
        >
          Register Mint NFT
        </Button>
      )
    }

    if (claimNFTInfo.nftId > 0) {
      return (
        <Button w={'100%'} disabled isLoading={loadingClaimNFT} variant="primary2">
          Minted
        </Button>
      )
    }

    return <ClaimButton handleClaimNFT={handleClaimNFT} />
  }

  const _renderParrentCode = () => {
    // is registerd claim
    if (claimNFTInfo.timeClaim) {
      return claimNFTInfo.ref || 'N/A'
    }
    return ref || 'N/A'
  }

  useEffect(() => {
    const fetchDataMintNFT = async () => {
      const totalMinted = await claimNFTContract._countMinted()
      setMintedNFTCount(parseInt(totalMinted.toString()))

      const _isClaim = await claimNFTContract.isClaim()
      setIsClaim(_isClaim)
    }
    fetchDataMintNFT()
  }, [loadingClaimNFT])

  useEffect(() => {
    if (account) {
      dispatch(claimNFTActions.getClaimNFTInfo({ claimNFTContract, account }))
    } else {
      setUserBalance(0)
      dispatch(
        claimNFTActions.save({
          claimNFTInfo: initialClaimNFTState.claimNFTInfo,
        }),
      )
    }
  }, [dispatch, claimNFTContract, account, loadingClaimNFT, loadingRegisterClaimNFT])

  return (
    <Box fontSize={'0.8em'} py={'24px'} maxW={'1248px'} px={'24px'} mx={'auto'}>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
        gap={'48px'}
        mt={'25px'}
        maxW={'1300px'}
        mx={'auto'}
      >
        <Flex
          flexDirection={'column'}
          flex={1}
          w={{ base: 'full', md: '50%' }}
          alignItems={'center'}
          justify={'space-between'}
          gap={10}
        >
          <Center
            flex={1}
            w={'full'}
            p={{ base: 4, md: 10 }}
            bg={'linear-gradient(308.45deg, rgba(255, 122, 0, 0.4) -94.97%, rgba(255, 122, 0, 0) 70.06%)'}
            border={'2px solid rgba(255, 122, 0, 0.2)'}
          >
            <Image h={'100%'} maxH={'500px'} src={'/images/nft.png'} />
          </Center>
          <Box w={'full'}>{_renderButton()}</Box>
        </Flex>
        <Flex
          flexDir={'column'}
          justify={'space-between'}
          bg={'linear-gradient(308.45deg, rgba(255, 122, 0, 0.4) -94.97%, rgba(255, 122, 0, 0) 70.06%)'}
          border={'2px solid rgba(255, 122, 0, 0.2)'}
          p={{ base: 4, md: 10 }}
          w={{ base: 'full', md: '50%' }}
        >
          <CustomHeading fontSize={{ base: '4xl', md: '6xl' }}>A&W NFT</CustomHeading>
          <HStack mt={'5px'} gap={'20px'}>
            <Text>Contract Address:</Text>
            <HStack gap={'12px'}>
              <Link target={'_blank'} href={getBscScanLink(getAnWNFTAddress())}>
                <Text
                  letterSpacing={{ base: 0, md: '4px' }}
                  transition={'all 0.2s'}
                  _hover={{
                    transform: 'scale(1.08)',
                  }}
                  color={'theme.color-1'}
                >
                  {shortWalletAddress(getAnWNFTAddress())}
                </Text>
              </Link>

              <CopyItem color={'#9B99AD'} content={getAnWNFTAddress()} />
            </HStack>
          </HStack>
          <Text>
            NFT Minted:{' '}
            <Text as={'span'} color={'white'}>
              {mintedNFTCount}
            </Text>
          </Text>
          <Divider my={'24px'} borderColor={'white'} />
          <Box>
            <Text fontWeight={'600'}>Description</Text>
            <Text mt={'24px'}>
              A limited edition NFT from A&W NFT to celebrate the launch of A&W's long-awaited{' '}
              {REACT_APP_CHAIN_ID === ChainId.TESTNET ? 'testnet' : 'mainnet'} launch. Thank you for your participation!
            </Text>
          </Box>
          <Divider my={'24px'} borderColor={'#fff'} />
          <Flex align={'center'} gap={4}>
            <Text color={'white'}>Share with: </Text>
            <HStack mt={'6px'} spacing={'12px'}>
              <Box
                transition={'all 0.2s'}
                _hover={{
                  transform: 'scale(1.2)',
                }}
              >
                <TelegramShareButton url={getShareUrl()}>
                  <TelegramIcon size={28} round={true} />
                </TelegramShareButton>
              </Box>
              <Box
                transition={'all 0.2s'}
                _hover={{
                  transform: 'scale(1.2)',
                }}
              >
                <FacebookShareButton url={getShareUrl()}>
                  <FacebookIcon size={28} round={true} />
                </FacebookShareButton>
              </Box>
              <Box
                transition={'all 0.2s'}
                _hover={{
                  transform: 'scale(1.2)',
                }}
              >
                <TwitterShareButton url={getShareUrl()}>
                  <TwitterIcon size={28} round={true} />
                </TwitterShareButton>
              </Box>
            </HStack>
          </Flex>
          <Divider my={'24px'} borderColor={'#fff'} />
          <Box mt={4}>
            {claimNFTInfo.index > 0 && (
              <>
                <Text fontWeight={'500'}>Your Referral Url:</Text>
                <Tooltip placement="top" label={'Copy'} hasArrow>
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    border={'1px solid #5E5E5E'}
                    bg={'transparent'}
                    flexWrap={'wrap'}
                    backdropFilter={'blur(2px)'}
                    borderRadius={'0'}
                    cursor={'pointer'}
                    color="white"
                    mt={'5px'}
                    fontWeight="600"
                    lineHeight="32px"
                    fontFamily={'default'}
                    transition={'all 0.2s'}
                    p={'5px'}
                    _hover={{
                      bg: 'rgba(255,255,255,0.1)',
                      transform: 'scale(1.02)',
                    }}
                    onClick={() => {
                      copyText(getReferralUrl())
                    }}
                  >
                    <Text>
                      {getReferralUrl()}
                      <CopyIcon cursor="pointer" ml={'10px'} />
                    </Text>
                  </Flex>
                </Tooltip>
                <Text mt={'12px'}>
                  Total Ref:{' '}
                  <Text as={'span'} color={'white'}>
                    {claimNFTInfo.totalRef}
                  </Text>
                </Text>
              </>
            )}
            {claimNFTInfo.index <= 0 && (
              <>
                <Text fontWeight={'500'} mb={'12px'}>
                  Your Referral Url: &nbsp;{' '}
                  <Text as={'span'} color={'white'}>
                    N/A
                  </Text>
                </Text>
                <Text fontWeight={'500'} mt={'12px'}>
                  Parent Referral Code: &nbsp;{' '}
                  <Text as={'span'} color={'white'}>
                    {ref || 'N/A'}
                  </Text>
                </Text>
              </>
            )}
            {claimNFTInfo.index > 0 && (
              <Text fontWeight={'500'} mt={'12px'}>
                Parent Referral Code: &nbsp;{' '}
                <Text as={'span'} color={'white'}>
                  {_renderParrentCode()}
                </Text>
              </Text>
            )}
          </Box>

          {claimNFTInfo.nftId > 0 && (
            <>
              <Divider my={'24px'} borderColor={'#fff'} />
              <Box>
                <Text fontWeight={'500'} mb={'12px'}>
                  NFT ID Minted: &nbsp;{' '}
                  <Text as={'span'} color={'white'}>
                    {claimNFTInfo.nftId}
                  </Text>
                </Text>
                <Text fontWeight={'500'} mb={'12px'}>
                  Time Minted: &nbsp;{' '}
                  <Text as={'span'} color={'white'}>
                    {dayjs.unix(claimNFTInfo.timeClaim).format('HH:mm:ss MM-DD-YYYY')}
                  </Text>
                </Text>
              </Box>
            </>
          )}
        </Flex>
      </Flex>

      <Flex flexDir={'column'} gap={'10px'} py={20} mt={10}>
        <Heading
          my={'30px'}
          color={'theme.color-7'}
          fontWeight={700}
          textAlign={'center'}
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: 'inherit',
          }}
        >
          Benefits of owning A&W NFT
        </Heading>
        <Accordion allowToggle py={'6'} index={indexAccordion} onChange={(i) => setIndexAccordion(i as number)}>
          {BENEFITS.map((item, index) => (
            <AccordionItem py={'4'} key={index}>
              <h2>
                <AccordionButton
                  _active={{
                    border: 'none',
                    outline: 'none',
                  }}
                  _focus={{
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={'lg'}
                    fontWeight={600}
                    color={indexAccordion === index ? 'theme.color-7' : 'white'}
                  >
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.description}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Box>
  )
}

export default Home
