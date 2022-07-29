import { Grid, Box, Spinner, Flex, Button } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import ProductCard from '../../../components/productCard'

import useGetWithPagination from '../../../hooks/useGetWithPagination'
import ProductFilters from './ProductFilters/ProductFilters'

const Shop = () => {
  const {
    data: products,
    nextPage,
    prevPage,
    disableNextPage,
    disablePrevPage,
    isLoading,
    setTitle,
    setStock,
    setMaxPrice,
    setMinPrice
  } = useGetWithPagination('products')

  return (
    <Flex m={'5%'}>
      <ProductFilters filterStock={setStock} filterTitle={setTitle} filterMax={setMaxPrice} filterMin={setMinPrice} />
      <Box w="80%">
        {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
        {isLoading || (
          <Grid templateColumns="repeat(4, 1fr)" mx="auto" w="95%">
            {products &&
              products.map((product) => {
                return <ProductCard info={product} key={product.id} />
              })}
          </Grid>
        )}
      </Box>
      <Flex justifyContent="center">
        <Button onClick={prevPage} disabled={disablePrevPage} m="5px">
          {' '}
          <ArrowBackIcon />
        </Button>
        <Button onClick={nextPage} disabled={disableNextPage} m="5px">
          {' '}
          <ArrowForwardIcon />
        </Button>
      </Flex>
    </Flex>
  )
}

export default Shop
