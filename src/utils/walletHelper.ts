import Web3 from 'web3'
import { toastError } from './uiHelper'

let web3: Web3 | undefined = undefined // Will hold the web3 instance

export const getPublicAddress = async () => {
  if (!(window as any).ethereum) {
    toastError({
      title: 'Error',
      message: 'Please install MetaMask first.',
    })
    return
  }
  if (!web3) {
    try {
      await (window as any).ethereum.enable()
      web3 = new Web3((window as any).ethereum)
    } catch (error) {
      toastError({
        title: 'Error',
        message: 'You need to allow MetaMask.',
      })
      return
    }
  }
  const publicAddress = (await web3.eth.getAccounts())[0]
  if (!publicAddress) {
    toastError({
      title: 'Error',
      message: 'Please activate MetaMask first.',
    })
    return
  }
  return publicAddress
}

export const getSignature = async (publicAddress, nonce) => {
  try {
    const signature = await web3?.eth.personal.sign(
      `A&W NFT login:${nonce}`,
      publicAddress,
      '', // MetaMask will ignore the password argument here
    )
    return signature
  } catch (err) {
    toastError({
      title: 'Error',
      message: 'You need to sign the message to be able to log in.',
    })
    return null
  }
}
