
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import useUser from '../hooks/useUser'

const UserInfo = () => {
  const { user } = useUser()
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://i.pinimg.com/474x/fb/ef/50/fbef50ec9ada4cea73bd13fff13e4d74.jpg'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {user.username}
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {user.email}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #fairy
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #style
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #fashion
            </Badge>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}

export default UserInfo
