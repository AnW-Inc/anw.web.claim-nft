import { Box } from '@chakra-ui/layout'
import { LOADER_CONTAINER } from 'constants/index'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ILayoutsProps } from '../types'

const DefaultLayout: React.FunctionComponent<ILayoutsProps> = (props) => {
  const { layout: Layout, component: Component, title = '' } = props
  return (
    <>
      <Helmet>
        <title>{`${title} | AnW NFT - Free mint NFT`}</title>
      </Helmet>
      <Box>
        <Box id={LOADER_CONTAINER} />
        <Layout>
          <Component {...props} />
        </Layout>
      </Box>
    </>
  )
}

export default DefaultLayout
