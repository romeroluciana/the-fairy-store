import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import {
  Flex,
  Text,
  useColorModeValue,
  Box,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import UserMenu from '../../components/UserMenu'
import useUser from '../../hooks/useUser'
import Cart from '../../pages/cart/Cart'
import Form from '../../pages/form/Form'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useUser()

  return (
    <Flex
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      flexDirection={'column'}
    >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        align={'center'}
        justifyContent={'space-between'}
        mx={'5%'}
      >
        <Flex w={'100%'} justifyContent={'space-between'}>
          <Link to="/">
            <Image
              boxSize="100px"
              src={'https://i.ibb.co/M5vJRnj/The-fairy-Photo-Room.png'}
            />
          </Link>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />{' '}
          <HStack as={'nav'} spacing={2}>
            <Stack
              direction="row"
              spacing={4}
              align="center"
              display={{ base: 'none', md: 'flex' }}
            >
              <Link to="shop">
                <Button colorScheme="pink" variant="ghost">
                  Shop
                </Button>
              </Link>
              <Link to="aboutUs">
                <Button colorScheme="pink" variant="ghost">
                  About us
                </Button>
              </Link>
            </Stack>
            <Stack direction="row" align="center">
              <Cart />
              {user ? <UserMenu /> : <Form />}
            </Stack>
          </HStack>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box display={{ md: 'none' }} justifyContent={'center'}>
          <Stack as={'nav'} spacing={4}>
            <Link to="shop">
              <Text
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Shop
              </Text>
            </Link>
            <Link to="aboutUs">
              <Text
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                About us
              </Text>
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Flex>
  )
}

export default Header
