import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { ReactComponent as HeaderIcon } from 'assets/icons/metamask.svg'
import Wallet from 'components/Wallet'
import useAuth, { connectorLocalStorageKey } from 'hooks/useAuth'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { breakpointValues } from 'theme/foundations/breakpoints'
import { ConnectorNames } from 'utils/web3React'

interface IWithSubNavigationProps {
  onOpen?: () => void
}

const WithSubNavigation: React.FunctionComponent<IWithSubNavigationProps> = (props) => {
  const { login, logout } = useAuth()

  const { account } = useWeb3React()
  const [isSmall] = useMediaQuery(`(min-width: ${parseInt(breakpointValues.sm)}px)`)
  const variant = isSmall ? 'primary2' : 'primary'

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames
    if (connectorId) login(ConnectorNames.Injected)
  }, [login])

  const handleLogout = async () => {
    logout()
  }

  return (
    <Box as="header" py={'20px'}>
      <Flex h="70px" py={1} px={5} borderBottom={1} align="center" justify="space-between">
        <NavLink to="/">
          <Flex alignItems="center" h="40px" pr={8}>
            <Center p={2}>
              <Image src="/logo.png" w={{ base: '50px', md: '100px' }} alt={'logo'} />
            </Center>
          </Flex>
        </NavLink>
        <Stack flex={{ base: 1, md: 0 }} align="center" justify={'flex-end'} direction={'row'} spacing={3}>
          {!account && (
            <>
              <Wallet variant={variant} />
            </>
          )}

          {account && (
            <>
              <Menu matchWidth>
                <MenuButton pr="4px" as={Button} rightIcon={<HeaderIcon />} variant={variant}>
                  <Tooltip bg="gray.200" color="black" label={account}>
                    {`${account.substring(0, 4)}...${account.substring(account.length - 5)}`}
                  </Tooltip>
                </MenuButton>
                <MenuList
                  minW={{ base: 'auto', md: '200px' }}
                  zIndex="999"
                  color="white"
                  w={'full'}
                  bg={'linear-gradient(308.45deg, rgba(0, 255, 200, 0.4) -94.97%, rgba(0, 255, 200, 0) 70.06%)'}
                  borderColor={'rgba(0, 255, 200, 0.4)'}
                >
                  <MenuItem
                    p={{ base: '0 .8rem', md: '.4rem .8rem' }}
                    onClick={() => handleLogout()}
                    _hover={{
                      bg: 'transparent',
                      color: 'rgba(0, 255, 200, 1)',
                      WebkitTextFillColor: 'transparent',
                      WebkitTextStrokeWidth: '0.5px',
                      WebkitTextStrokeColor: 'inherit',
                      bgPos: 'left',
                    }}
                    _active={{
                      bg: 'transparent',
                      color: 'rgba(0, 255, 200, 1)',
                      WebkitTextFillColor: 'transparent',
                      WebkitTextStrokeWidth: '0.5px',
                      WebkitTextStrokeColor: 'inherit',
                    }}
                    _focus={{
                      bg: 'transparent',
                      color: 'rgba(0, 255, 200, 1)',
                      WebkitTextFillColor: 'transparent',
                      WebkitTextStrokeWidth: '0.5px',
                      WebkitTextStrokeColor: 'inherit',
                    }}
                  >
                    Disconnect
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  )
}

export default WithSubNavigation
