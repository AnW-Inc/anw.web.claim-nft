import { createStandaloneToast } from '@chakra-ui/react'
import LoadingWithMask from 'components/LoadingWithMask'
import { LOADER_CONTAINER } from 'constants/index'
import ReactDOM from 'react-dom'
const toast = createStandaloneToast()

interface toastProps {
  message?: String
  title?: String
}

export const toastError = ({ title = 'Error', message = 'Something went wrong!' }: toastProps) => {
  toast({
    title,
    description: message,
    status: 'error',
    duration: 3000,
    isClosable: true,
    position: 'top',
  })
}
export const toastSuccess = ({ title = '', message = 'Success' }: toastProps) => {
  toast({
    title,
    description: message,
    status: 'success',
    duration: 3000,
    isClosable: true,
    position: 'top',
  })
}
export const toastInfo = ({ title = '', message = 'Info' }: toastProps) => {
  toast({
    title,
    description: message,
    status: 'info',
    duration: 3000,
    isClosable: true,
    position: 'top',
  })
}

export const showGlobalLoading = (id = LOADER_CONTAINER) => {
  hiddenGlobalLoading()
  const node = document.getElementById(id)
  ReactDOM.render(<LoadingWithMask />, node)
  document.body.style.height = '100vh'
  document.body.style.overflow = 'hidden'
}

export const hiddenGlobalLoading = (id = LOADER_CONTAINER) => {
  document.body.style.height = 'auto'
  document.body.style.overflow = 'auto'
  const node = document.getElementById(id)
  ReactDOM.unmountComponentAtNode(node)
}
