import { Grid, Box, Spinner, Flex } from '@chakra-ui/react'

import ProductCard from '../../../components/productCard'
import useGet from '../../../Hooks/useGet'
import ProductFilters from './ProductFilters/ProductFilters'

const Shop = () => {
  const { data: products, isLoading } = useGet('products')

  return (
    <Flex m={'5%'} >
      <ProductFilters />
      <Box w="80%" >
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
    </Flex>
  )
}

export default Shop
