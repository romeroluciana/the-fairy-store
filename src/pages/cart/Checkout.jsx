import {
  HStack,
  Heading,
  Box,
  Text,
  Button,
  Flex,
  Stack,
} from '@chakra-ui/react'

import useCart from '../../hooks/useCart'
import Product from './Product'

const Checkout = () => {
  const { cart, totalCart } = useCart()
  return (
    <Stack
      m={{ base: '5%', md: '2%' }}
      justifyContent={'space-around'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w={{ base: '100%', md: '50%' }}>
        <Heading>Checkout</Heading>
        {!!cart.length && (
          <>
            <Box>
              {cart.map((product) => (
                <Product info={product} key={`cartProduct${product.id}`} />
              ))}
            </Box>
          </>
        )}
      </Box>
      <Box w={{ base: '100%', md: '30%' }} bgColor={'gray.100'}>
        <Heading as="h3" size="lg" m={'5%'}>
          Your order
        </Heading>
        <HStack m={'5%'} flexDirection={'column'}>
          <Flex justifyContent={'space-between'} w={'100%'} mb={'8%'}>
            <Text>Shipping:</Text>
            <Text>At the moment we do not deliver 😔</Text>
          </Flex>
          <Flex justifyContent={'space-between'} w={'100%'}>
            <Text>Total:</Text>
            <Text fontWeight={'bold'}>${totalCart}</Text>
          </Flex>
          <Button colorScheme="pink" variant="solid" size="sm">
            Place order
          </Button>
        </HStack>
      </Box>
    </Stack>
  )
}

export default Checkout
