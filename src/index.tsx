import React from 'react'
import ReactDOM from 'react-dom'
import Fonts from 'theme/foundations/fonts'
import App from './App'
import Providers from './Providers'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Fonts />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
