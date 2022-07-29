import {
  Heading,
  useColorModeValue,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Switch,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Text,
} from '@chakra-ui/react'

import PriceSlider from './PriceSlider'

const ProductFilters = ({ filterTitle, filterStock, filterMax, filterMin }) => {
  const handleOnChange = (e) => {
    filterTitle(e.target.value)
  }
  const handleStock = (e) => {
    filterStock(e.target.checked ? 1 : 0)
  }
  const handleMin = (e) => {
    filterMin(e.target.value)
  }
  const handleMax = (e) => {
    filterMax(e.target.value)
  }

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
      <Heading as="h3" size="lg" color={useColorModeValue('gray.600', 'white')}>
        Products
      </Heading>

      <Input onChange={handleOnChange} placeholder="Search..." />

      <Box>
        <Text>From</Text>
        <NumberInput size="xs" maxW={16}>
          <NumberInputField onChange={handleMax} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text>To</Text>
        <NumberInput size="xs" maxW={16}>
          <NumberInputField onChange={handleMin} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
       
      </Box>

      <FormControl display="flex" alignItems="center">
        <FormLabel mb="0">Available stock</FormLabel>
        <Switch onChange={handleStock} colorScheme="pink" />
      </FormControl>
    </Box>
  )
}

export default ProductFilters
