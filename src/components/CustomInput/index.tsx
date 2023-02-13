import { FormControl, FormControlProps, FormErrorMessage } from '@chakra-ui/form-control'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import * as React from 'react'
import { ChangeHandler, FieldErrors } from 'react-hook-form'

interface ICustomInputProps {
  name: string
  id?: string
  label?: string
  placeholder?: string
  type?: string
  errors?: FieldErrors
  disabled?: boolean
  register?: (name: string) => {
    onChange: ChangeHandler
    onBlur: ChangeHandler
    ref: React.Ref<any>
    name: string
  }
  leftElement?: JSX.Element
  rightElement?: JSX.Element
}

const CustomInput: React.FunctionComponent<ICustomInputProps & FormControlProps> = (props) => {
  const {
    register,
    errors,
    label,
    id,
    name,
    type = 'text',
    placeholder,
    leftElement,
    rightElement,
    disabled = false,
    ...rest
  } = props
  const error = errors[name]

  return (
    <FormControl isInvalid={!!error} {...rest}>
      <Text htmlFor={name} mb="16px">
        {label}
      </Text>
      <InputGroup>
        {leftElement && <InputLeftElement children={leftElement} />}
        <Input
          id={name}
          placeholder={placeholder}
          type={type}
          {...register(name)}
          border="none"
          bg="rgba(228, 228, 228, 0.1)"
          color="white"
          h="56px"
          disabled={disabled}
          _invalid={{ boxShadow: '0 0 0 1px #FF4B32' }}
        />
        {rightElement && <InputRightElement children={rightElement} />}
      </InputGroup>
      {error && <FormErrorMessage color="#FF4B32">{error?.message}</FormErrorMessage>}
    </FormControl>
  )
}

export default CustomInput
