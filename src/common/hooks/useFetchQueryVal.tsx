import qs from 'qs'
import { useLocation } from 'react-router-dom'

function useFetchQueryVal(type: string): any{
  let { search } = useLocation()
  search = search.replace('?', '')
  let obj = qs.parse(search)
  return obj[type]
}

export default useFetchQueryVal