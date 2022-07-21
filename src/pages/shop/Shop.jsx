import { Grid, Box, Spinner } from '@chakra-ui/react'

import ProductCard from '../../components/productCard'
import useGet from '../../Hooks/useGet'

const Shop = () => {
  const { data: products, isLoading } = useGet('products')

  return (
    <>
      <h1>SHOP</h1>
      <Box w="100%" my="30px">
        {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
        {isLoading || (
          <Grid templateColumns="repeat(4, 1fr)" mx="auto" w="90%">
            {products &&
              products.map((product) => {
                return <ProductCard info={product} key={product.id} />
              })}
          </Grid>
        )}
      </Box>
    </>
  )
}

export default Shop
