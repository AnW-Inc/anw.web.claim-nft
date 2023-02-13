import { Box, Popover, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import DesktopSubNav from './DesktopSubNav'
import { NAV_ITEMS } from './utils'

interface IDesktopNavProps {}

const DesktopNav: React.FunctionComponent<IDesktopNavProps> = (props) => {
  const { pathname } = useLocation()
  const isMatchInventory = pathname.includes('/inventory')

  const getColor = (label) => {
    const linkColor = '#31D49E'
    if (label === 'Inventory' && isMatchInventory) {
      return linkColor
    }
    if (label === 'Marketplace' && !isMatchInventory) {
      return linkColor
    }
    return 'black.800'
  }

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NavLink to={navItem.href ?? '#'}>
                <Text
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={getColor(navItem.label)}
                  _hover={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  {navItem.label}
                </Text>
              </NavLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={'xl'} bg={'white'} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav
