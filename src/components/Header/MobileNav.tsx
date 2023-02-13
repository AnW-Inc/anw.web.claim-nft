import { useColorModeValue } from '@chakra-ui/color-mode'
import { Stack } from '@chakra-ui/layout'
import * as React from 'react'
import MobileNavItem from './MobileNavItem'
import { NAV_ITEMS } from './utils'

interface IMobileNavProps {}

const MobileNav: React.FunctionComponent<IMobileNavProps> = (props) => {
  return (
    <Stack bg={useColorModeValue('#222939', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

export default MobileNav
