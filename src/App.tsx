import PageLoader from 'components/PageLoader'
import ScrollToTop from 'components/ScrollToTop'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import routes from 'configs/routes'
import Layout from 'Layouts'
import React from 'react'
import { Redirect, Router, Switch } from 'react-router-dom'
import history from 'routerHistory'

function App() {
  return (
    <Router history={history}>
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <ScrollToTop>
          <Switch>
            {routes.map((page, key) => {
              if (page.component) {
                return <Layout {...page} key={key} />
              }
              return null
            })}
            <Redirect to={'/claim-nft'} />
          </Switch>
        </ScrollToTop>
      </SuspenseWithChunkError>
    </Router>
  )
}

export default App
