import { useLocation } from 'react-router-dom'

const useQuery = (params) => {
  const query = new URLSearchParams(useLocation().search)
  return query.get(params)
}

export default useQuery
