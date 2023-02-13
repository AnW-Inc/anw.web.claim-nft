import { Box, Button, ButtonProps, Center, Icon, Text } from '@chakra-ui/react'
import useAuth from 'hooks/useAuth'
import * as React from 'react'
import { ConnectorNames } from 'utils/web3React'

interface IWalletProps extends ButtonProps {}

const Wallet: React.FunctionComponent<IWalletProps> = (props) => {
  const { login } = useAuth()

  const handleClick = async () => {
    login(ConnectorNames.Injected)
  }
  return (
    <Box justifyContent="center">
      <Center>
        <Button
          onClick={() => {
            handleClick()
          }}
          variant={'primary2'}
          {...props}
        >
          <Icon viewBox="0 0 25 24" focusable="false">
            <path
              opacity="0.2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.9 4.2143H2.5V17.4714C2.5 18.0315 2.5 18.3115 2.60899 18.5254C2.70487 18.7136 2.85785 18.8665 3.04601 18.9624C3.25992 19.0714 3.53995 19.0714 4.1 19.0714H20.9C21.4601 19.0714 21.7401 19.0714 21.954 18.9624C22.1422 18.8665 22.2951 18.7136 22.391 18.5254C22.5 18.3115 22.5 18.0315 22.5 17.4714V14H20C19.5353 14 19.303 14 19.1098 13.9616C18.3164 13.8038 17.6962 13.1836 17.5384 12.3902C17.5 12.197 17.5 11.9647 17.5 11.5C17.5 11.0353 17.5 10.803 17.5384 10.6098C17.6962 9.81644 18.3164 9.19625 19.1098 9.03843C19.303 9 19.5353 9 20 9H22.5V5.8143C22.5 5.25425 22.5 4.97422 22.391 4.76031C22.2951 4.57215 22.1422 4.41917 21.954 4.32329C21.7401 4.2143 21.4601 4.2143 20.9 4.2143Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 3.71434C2.22386 3.71434 2 3.9382 2 4.21434V19.0714C2 19.3476 2.22386 19.5714 2.5 19.5714H22.5C22.7761 19.5714 23 19.3476 23 19.0714V14.4865L24.4955 14.5C24.6289 14.5012 24.7572 14.449 24.852 14.3551C24.9467 14.2612 25 14.1334 25 14V8.99999C25 8.72385 24.7761 8.49999 24.5 8.49999H23V4.21434C23 3.9382 22.7761 3.71434 22.5 3.71434H12.5H2.5ZM22.499 9.49999C22.4993 9.49999 22.4997 9.49999 22.5 9.49999C22.5003 9.49999 22.5007 9.49999 22.501 9.49999H24V13.4954L19.9616 13.4589C18.8754 13.4491 18 12.5658 18 11.4795C18 10.3862 18.8863 9.49999 19.9795 9.49999H22.499ZM22 8.49999V4.71434H12.5H3V18.5714H22V14.4774L19.9526 14.4589C18.3176 14.4441 17 13.1145 17 11.4795C17 9.83397 18.334 8.49999 19.9795 8.49999H22Z"
              fill="currentColor"
            />
          </Icon>
          <Text ml={'20px'}>Connect Wallet</Text>
        </Button>
      </Center>
    </Box>
  )
}

export default Wallet
