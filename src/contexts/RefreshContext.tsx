import useIsBrowserTabActive from 'hooks/useIsBrowserTabActive'
import React, { useEffect, useState } from 'react'
const RefreshContext = React.createContext({ slow: 0, fast: 0 })

const FAST_INTERVAL = 10000
const SLOW_INTERVAL = 60000

interface IAppProps {}

const RefreshContextProvider: React.FunctionComponent<IAppProps> = (props) => {
  const { children } = props
  const [slow, setSlow] = useState(0)
  const [fast, setFast] = useState(0)
  const isBrowserTabActiveRef = useIsBrowserTabActive()

  /**
   * fast interval
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      if (isBrowserTabActiveRef.current) {
        setFast((prev) => prev + 1)
      }
    }, FAST_INTERVAL)
    return () => clearInterval(interval)
  }, [isBrowserTabActiveRef])

  /**
   * slow interval
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      if (isBrowserTabActiveRef.current) {
        setSlow((prev) => prev + 1)
      }
    }, SLOW_INTERVAL)
    return () => clearInterval(interval)
  }, [isBrowserTabActiveRef])
  return <RefreshContext.Provider value={{ slow, fast }}>{children}</RefreshContext.Provider>
}

export { RefreshContextProvider, RefreshContext }
