import * as React from 'react'
import { Mode, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AnyObjectSchema } from 'yup'

interface ICustomFormProps {
  defaultValues?: any
  children: JSX.Element[]
  onSubmit: SubmitHandler<any>
  validationSchema?: AnyObjectSchema
  mode?: Mode
}

const CustomForm: React.FunctionComponent<ICustomFormProps> = (props) => {
  const { defaultValues, children, onSubmit, validationSchema, mode = 'all' } = props
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues, mode, resolver: yupResolver(validationSchema) })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child: any) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    errors,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export default CustomForm
