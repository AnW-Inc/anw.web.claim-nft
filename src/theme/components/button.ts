import { ComponentStyleConfig } from '@chakra-ui/react'
import { fonts } from '../foundations/fonts'

export const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      background: '#31D49E',
      padding: '16px 25px',
      fontFamily: fonts.default,
      fontSize: '16px',
      lineHeight: '16px',
      fontWeight: 'bold',
      minWidth: '140px',
      color: 'white',
      rounded: '0',
      bg: 'linear-gradient(308.45deg, rgba(0, 255, 200, 0.4) -94.97%, rgba(0, 255, 200, 0) 70.06%) left',
      border: '1px solid rgba(0, 255, 200, 0.4)',
    },
    primary2: {
      fontFamily: fonts.default,
      fontWeight: '500',
      letterSpacing: '8px',
      color: 'white',
      rounded: '0',
      border: '1px solid rgba(0, 255, 200, 0.4)',
      minH: '64px',
      minW: '264px',
      padding: '32px',
      bg: 'linear-gradient(308.45deg, rgba(0, 255, 200, 0.4) -94.97%, rgba(0, 255, 200, 0) 70.06%) left',
      bgSize: '200%',
      fontSize: '16px',
      lineHeight: '24px',
      transition: 'all 0.3s',
      _hover: {
        color: 'rgba(0, 255, 200, 1)',
        transition: 'all 0.3s',
        borderColor: 'rgba(0, 255, 200, 1)',
        bgPos: 'right',
      },
      WebkitTextFillColor: 'transparent',
      WebkitTextStrokeWidth: '1px',
      WebkitTextStrokeColor: 'inherit',
      _disabled: {
        opacity: 1,
        borderColor: 'red.400',
        color: 'red.400',
        _hover: {
          borderColor: 'red.400',
          color: 'red.400',
        },
      },
    },
    header: {
      fontFamily: fonts.secondary,
      borderRadius: '10px',
      fontSize: '14px',
      background: '#31D49E',
      lineHeight: '16px',
      color: '#fff',
    },
    'no-hover': {
      _hover: {
        boxShadow: 'none',
      },
    },
  },
  baseStyle: {
    fontWeight: 'bold',
    color: '#23262F',
    padding: '12px 16px',
    background: '#F5F7FF',
    _focus: {
      boxShadow: 'none',
    },
    _hover: {
      filter: 'brightness(0.7)',
    },
  },
}
