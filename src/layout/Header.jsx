import { Heading, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Cart from '../pages/cart/Cart'
import ColorModeToggle from './ColorModeToggle'

const Header = () => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'80px'}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}
      justifyContent={'space-between'}
      mx={'5%'}
    >
      <Flex>
        <Link to="/">
          <Heading>The fairy store ✨</Heading>
        </Link>
      </Flex>

      <Flex w={'25%'} flexDirection={'row'} justifyContent={'space-between'}>
        <Link to="shop">
          <Text>Shop</Text>
        </Link>
        <Link to="aboutUs">
          <Text>About us</Text>
        </Link>
        <ColorModeToggle />
        <Link to="cart">
          <Cart />
        </Link>
        <Link to="cart">
          <Text mx="10px" fontSize="1.3rem">
            <FaUserAlt />
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header
