import { useState } from 'react'

import {
  HStack,
  Heading,
  Box,
  Text,
  Button,
  Flex,
  Stack,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import useCart from '../../../hooks/useCart'
import useUser from '../../../hooks/useUser'
import Form from '../../form/Form'
import Product from './Product'

const Checkout = () => {
  const { cart, totalCart, deleteAllProducts } = useCart()
  const [loading, setLoading] = useState(false)
  const { user } = useUser()
  const toast = useToast({
    variant: 'top-accent',
    isClosable: true,
    duration: 6000,
  })
  const navigate = useNavigate()
  console.log(user)
  const handleOnClick = async () => {
    setLoading(true)
    try {
      await axios.post(
        'https://strapiecommerce-production-6186.up.railway.app/api/orders',
        {
          data: { Item: cart, users_permissions_users: user.id },
        },
        {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      )
      toast({
        title: 'Successful purchase',
        status: 'success',
      })
      deleteAllProducts()
      navigate('/orders')
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ups! something went wrong',
        status: 'error',
      })
    }
    setLoading(false)
  }
  if (!user) {
    return (
      <Box minH="100vh" p="30px">
        <Text> You need to log in to see your orders </Text>
      </Box>
    )
  } else {
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
              <Text>At the moment we don't deliver 😔</Text>
            </Flex>
            <Flex justifyContent={'space-between'} w={'100%'}>
              <Text>Total:</Text>
              <Text fontWeight={'bold'}>${totalCart}</Text>
            </Flex>

            <Button
              onClick={handleOnClick}
              isLoading={loading}
              colorScheme="pink"
              variant="solid"
              size="sm"
            >
              Place order
            </Button>
          </HStack>
        </Box>
      </Stack>
    )
  }
}

export default Checkout
