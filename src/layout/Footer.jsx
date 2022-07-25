import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'column'}>
          <Text>Made by Luciana Romero</Text>
          <Text>© 2022 The fairy store.</Text>
        </Stack>

        <Stack direction={'row'} spacing={6}>
          <FaTiktok />
          <FaYoutube />
          <FaInstagram />
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
