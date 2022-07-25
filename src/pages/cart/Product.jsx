import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'

import useCart from '../../hooks/useCart'

const Product = ({ info }) => {
  const { deleteItemCart } = useCart()
  const { attributes: product } = info
  return (
    <Flex mt="5">
      <Image
        src={product.image.data.attributes.url}
        w="70px"
        objectFit="cover"
        alt={`Product image ${product.title}`}
      />
      <Box>
        <Heading size="sm"> {product.title}</Heading>
        <Text>{product.price}</Text>
        <Text>{product.cantidad}</Text>
      </Box>
      <IconButton
        icon={<BsFillTrashFill />}
        onClick={() => deleteItemCart(product.id)}
      />
    </Flex>
  )
}

export default Product
