import { useEffect, useState } from 'react'

import axios from 'axios'

const URLBASE =
  'https://strapiecommerce-production-6186.up.railway.app/api/products?populate[0]=image'

const getFilterTitle = (title) =>
  title ? `&filters[title][$containsi]=${title}` : ''

const getStock = (stock) => (stock ? `&filters[stock][$gte]=${stock}` : '')

const getMinPrice = (minPrice) =>
  minPrice ? `&filters[price][$gte]=${minPrice}` : ''

const getMaxPrice = (maxPrice) =>
  maxPrice ? `&filters[price][$gte]=${maxPrice}` : ''

const useGetWithPagination = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [meta, setMeta] = useState(null)
  const [title, setTitle] = useState('')
  const [stock, setStock] = useState(0)
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()

  const prevPage = () => setPage(page - 1)
  const nextPage = () => setPage(page + 1)
  const disablePrevPage = page === 1
  const disableNextPage = page === meta

  useEffect(() => {
    setIsLoading(true)
    const getProducts = async () => {
      const response = await axios.get(
        `${URLBASE}&pagination[page]=${page}&pagination[pageSize]=8${getFilterTitle(
          title
        )}${getStock(stock)}${getMinPrice(minPrice)}${getMaxPrice(maxPrice)}`
      )
      setData(response.data.data)
      setMeta(response.data.meta.pagination.pageCount)
      setIsLoading(false)
    }
    getProducts()
  }, [page, title, stock, minPrice, maxPrice])

  return {
    data,
    isLoading,
    nextPage,
    prevPage,
    page,
    disableNextPage,
    disablePrevPage,
    title,
    setTitle,
    setStock,
    setMinPrice,
    setMaxPrice,
  }
}

export default useGetWithPagination
