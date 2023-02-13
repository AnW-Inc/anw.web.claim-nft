import { CopyIcon } from '@chakra-ui/icons'
import { IconProps, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { toastSuccess } from 'utils/uiHelper'

interface ICopyItemProps {
  tooltipLabel?: string
  content: string
}

export const copyText = (text: string) => {
  navigator.clipboard.writeText(text)
  toastSuccess({ title: 'Copied' })
}

const CopyItem: React.FunctionComponent<ICopyItemProps & IconProps> = (props) => {
  const { tooltipLabel = 'Copy', content = '', ...styles } = props
  return (
    <Tooltip placement="top" label={tooltipLabel} hasArrow>
      <CopyIcon cursor="pointer" onClick={() => copyText(content)} ml={'10px'} {...styles} />
    </Tooltip>
  )
}

export default CopyItem
