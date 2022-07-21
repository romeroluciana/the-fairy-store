import {
  Heading,
  Flex,
  Text,
  Box,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { AiFillFire } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

import { Link } from 'react-router-dom'

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

      <Flex w={'20%'} flexDirection={'row'} justifyContent={'space-between'}>
        <Link to="shop">
          <Text>Shop</Text>
        </Link>
        <Link to="aboutUs">
          <Text>About us</Text>
        </Link>
        <Link to="cart">
          <Text>Cart</Text>
        </Link>
        <Text mx="10px" fontSize="1.5rem">
          <FaUserAlt />
        </Text>
      </Flex>
    </Flex>
  )
}
/* const Header = () => {
  return (
    <Box border={'red solid 1px'}>
      <Flex
        border={'red solid 1px'}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justifyContent={'space-between'}
      >
        <Heading border={'red solid 1px'}>The fairy store</Heading>
        <Stack
          w={'20%'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          border={'green solid 1px'}
        >
          <Link to="shop" border={'red solid 1px'}>
            <Text border={'red solid 1px'}>Shop</Text>
          </Link>
          <Link to="aboutUs" border={'red solid 1px'}>
            <Text border={'red solid 1px'}>About us</Text>
          </Link>
          <Link to="cart" border={'red solid 1px'}>
            <Text border={'red solid 1px'}>Cart</Text>
          </Link>
        </Stack>
      </Flex>
    </Box>
  )
} */
export default Header
