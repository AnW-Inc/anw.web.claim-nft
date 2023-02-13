import { Text, TextProps } from '@chakra-ui/layout'
import * as React from 'react'

interface ICustomHeadingProps extends TextProps {}

const CustomHeading: React.FunctionComponent<ICustomHeadingProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Text
      fontSize={{ base: '40px', md: '64px' }}
      fontWeight="700"
      lineHeight="120%"
      fontFamily={'heading'}
      color={'rgb(0, 255, 200)'}
      style={{
        WebkitTextFillColor: 'transparent',
        WebkitTextStrokeWidth: '0.5px',
        WebkitTextStrokeColor: 'inherit',
      }}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default CustomHeading
