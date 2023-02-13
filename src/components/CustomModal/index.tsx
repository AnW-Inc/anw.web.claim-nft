import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react'
import * as React from 'react'

interface ICustomModalProps {
  isOpen: boolean
  onClose: () => void
  header?: string
  closeOnOverlayClick?: boolean
  maxW?: string
  animationOverlay?: ReactNode
}

const CustomModal: React.FunctionComponent<ICustomModalProps> = (props) => {
  const { isOpen, onClose, header, children, closeOnOverlayClick = true, maxW = '464px', animationOverlay } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={closeOnOverlayClick} isCentered>
      <ModalOverlay>{animationOverlay}</ModalOverlay>
      <ModalContent mx="12px" maxW={maxW} bg="#222939" borderRadius="16px">
        <ModalHeader
          fontWeight="600"
          fontSize={{ base: '20px', md: '24px' }}
          lineHeight={{ base: '30px', md: '48px' }}
          px={{ base: '12px', md: '48px' }}
          pb="22px"
          pt="43px"
          mt="20px"
          textAlign={'center'}
        >
          {header}
        </ModalHeader>
        <ModalCloseButton
          w="40px"
          h="40px"
          top="16px"
          right="16px"
          color="white"
          fontSize="8px"
          borderRadius="full"
          bg="#242731"
          _hover={{
            filter: 'brightness(1.5)',
          }}
        />
        <ModalBody
          color="#808191"
          fontFamily="secondary"
          fontSize="12px"
          lineHeight="16px"
          mb="16px"
          px={{ base: '12px', md: '48px' }}
        >
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CustomModal
