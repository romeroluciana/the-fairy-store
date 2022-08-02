import { Grid, Box, Spinner } from '@chakra-ui/react'

import ProductCard from '../../components/productCard'
import useGet from '../../hooks/useGet'
import Carousel from './Carousel'

const Home = () => {
  const { data: products, isLoading } = useGet(
    'products',
    '&filters[categories][name]=home'
  )

  return (
    <>
      <Carousel />
      <Box justifyContent={'center'} m={'5%'}>
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
    </>
  )
}
export default Home
