import {
  Heading,
  useColorModeValue,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react'

import PriceSlider from './PriceSlider'
import SearchInput from './SearchInput'

const ProductFilters = () => {
  return (
    <Box
      w={'20%'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'baseline'}
      justifyContent={'space-between'}
      h={'230px'}
      m={'1%'}
    >
      <Heading
        as="h3"
        size="lg"
        color={useColorModeValue('gray.600', 'white')}
      >
        Products
      </Heading>
      <SearchInput />
      <PriceSlider />
      <FormControl display="flex" alignItems="center">
        <FormLabel mb="0">Unidades disponibles</FormLabel>
        <Switch colorScheme="pink" />
      </FormControl>
    </Box>
  )
}

export default ProductFilters
