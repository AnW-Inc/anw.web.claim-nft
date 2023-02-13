import { useWeb3React } from '@web3-react/core'
import * as React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import DefaultLayout from './DefaultLayout'
import { ILayoutsProps } from './types'

const Layouts: React.FunctionComponent<ILayoutsProps & RouteProps> = (props) => {
  const { path = '/', exact = true, isAuthRequired = false } = props
  const { account } = useWeb3React()
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (!account && isAuthRequired) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: routeProps.location },
              }}
            />
          )
        }
        return <DefaultLayout {...routeProps} {...props} />
      }}
    />
  )
}

export default Layouts
