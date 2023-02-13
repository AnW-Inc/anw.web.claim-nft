import { BUILD_MODE, REACT_APP_BUILD_MODE } from 'configs'
import { toastError } from './uiHelper'

export class CustomError extends Error {
  status: number | undefined
  constructor(message: string, status: number = 999) {
    super(message)
    this.status = status
  }
}

export const showToastError = (error: any) => {
  const { status, code } = error

  if (REACT_APP_BUILD_MODE !== BUILD_MODE.PRODUCTION) {
    console.error(error)
  }
  if (status) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.error?.message || (error as any)?.data?.message || (error as any).message,
    })
    return
  }

  if (code && Number.isInteger(code)) {
    toastError({
      title: 'Error',
      message: (error as any)?.data?.message.replace('execution reverted: ', '') || (error as any).message,
    })
    return
  }
  toastError({
    title: 'Error',
    message: 'Oops, BSC Smart Chain can not mint your request!',
  })
  return
}
