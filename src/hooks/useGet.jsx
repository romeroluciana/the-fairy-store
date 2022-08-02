import { useEffect, useState } from 'react'

import axios from 'axios'

const initialURL = 'https://strapiecommerce-production-6186.up.railway.app/api/'

const populate = '?populate[0]=image'

const useGet = (url, filter = ' ') => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const getProducts = async () => {
      const response = await axios.get(
        `${initialURL}${url}${populate}${filter}`
      )
      setData(response.data.data)
      setIsLoading(false)
    }
    getProducts()
  }, [])

  return { data, isLoading }
}
export default useGet
