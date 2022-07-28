/* import { useParams } from 'react-router-dom'

import useGet from '../../hooks/useGet'

const Detail = () => {
  const { id } = useParams()
  const { data: product, isLoading } = useGet(`products/${id}`)
  console.log(product)
  return (
    <div>
      {product?.attributes.title}
      <img src={product?.attributes.image.data.attributes.url} />
    </div>
  )
}
export default Detail */
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Spinner
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import useGet from '../../hooks/useGet'

const Detail = () => {
  const { id } = useParams()
  const { data: product, isLoading } = useGet(`products/${id}`)
  console.log(product)
  return (
    <Container maxW={'7xl'}>
      {isLoading && <Spinner mx="50%" my="50px" size="xl" />}
      {isLoading || (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={product?.attributes.image.data.attributes.url}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                {product?.attributes.title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              >
                ${product?.attributes.price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}
                >
                  {product?.attributes.description}
                </Text>
              </VStack>
            </Stack>
          </Stack>
        </SimpleGrid>
      )}
    </Container>
  )
}

export default Detail
