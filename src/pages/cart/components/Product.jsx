import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'
import useCart from '../../../hooks/useCart'



const Product = ({ info }) => {
  const { cantidad } = info
  const { deleteItemCart, addProduct, decrementItemCart } = useCart()
  const { attributes: product } = info
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'space-between'}
      borderBottom={1}
      borderStyle={'solid'}
      w={'100%'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Box display={'flex'} my={'5%'}>
        <Image
          src={product.image.data.attributes.url}
          w="70px"
          objectFit="cover"
          alt={`Product image ${product.title}`}
        />
        <Flex flexDirection={'column'} ml={'10px'}>
          <Heading size="md"> {product.title}</Heading>
          <Text>${product.price}</Text>
        </Flex>
      </Box>

      <NumberInput size="xs" maxW={16} min={1} defaultValue={cantidad}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper onClick={() => addProduct(info)} />
          <NumberDecrementStepper onClick={() => decrementItemCart(info)} />
        </NumberInputStepper>
      </NumberInput>

      <IconButton
        variant="ghost"
        colorScheme="red"
        size="sm"
        icon={<BsFillTrashFill />}
        onClick={() => deleteItemCart(info.id)}
      />
    </Flex>
  )
}

export default Product
