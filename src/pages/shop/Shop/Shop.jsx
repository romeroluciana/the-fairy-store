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
    setMinPrice,
  } = useGetWithPagination('products')


  return (
    <Flex
      m={'5%'}
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems={{ base: 'center', md: 'stretch' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <ProductFilters
        filterStock={setStock}
        filterTitle={setTitle}
        filterMax={setMaxPrice}
        filterMin={setMinPrice}
      />
      <Flex w="80%" flexDirection={'column'} justifyContent={'center'}>
        <Box justifyContent={'center'}>
          {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
          {isLoading || (
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              }}
              mx="auto"
              w="95%"
            >
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
    </Flex>
  )
}

export default Shop
