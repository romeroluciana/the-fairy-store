import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  Tooltip,
} from '@chakra-ui/react'
import { IoBagAddOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import useCart from '../hooks/useCart'

const ProductCard = ({ info }) => {
  const { addProduct } = useCart()
  const { attributes: product, id } = info
  return (
    <Flex m={'5%'} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={product.image.data.attributes.url}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
        />
        <Box p="4">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Link to={`/shop/${id}`}>
              <Tooltip
                label="More details"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1em'}
              >
                <Box
                  fontSize="2x1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  _hover={{
                    background: 'white',
                    color: 'pink',
                  }}
                  cursor={'pointer'}
                >
                  {product.title}
                </Box>
              </Tooltip>
            </Link>

            <Tooltip
              label="Add to bag"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1em'}
            >
              <Box display={'flex'}>
                <Icon
                  onClick={() => addProduct(info)}
                  as={IoBagAddOutline}
                  h={5}
                  w={5}
                  alignSelf={'center'}
                  cursor={'pointer'}
                />
              </Box>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="1xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {product.price.toFixed(1)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductCard
