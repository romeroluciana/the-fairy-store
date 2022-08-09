import { useEffect, useState } from 'react'

import axios from 'axios'
import { useRecoilValue } from 'recoil'

import userAuthState from '../recoil/userAtom'

const initialURL = 'https://strapiecommerce-production-6186.up.railway.app/api/'

const populate = '?populate[0]=image'

const useGet = (url, filter = ' ') => {
  const user = useRecoilValue(userAuthState)

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const header = user ? { Authorization: `Bearer ${user.jwt}` } : {}

  useEffect(() => {
    setIsLoading(true)
    const getProducts = async () => {
      const response = await axios.get(
        `${initialURL}${url}${populate}${filter}`,
        header
      )
      setData(response.data.data)
      setIsLoading(false)
    }
    getProducts()
  }, [])

  return { data, isLoading }
}
export default useGet
