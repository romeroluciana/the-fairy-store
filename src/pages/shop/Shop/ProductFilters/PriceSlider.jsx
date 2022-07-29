import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Text,
  useColorModeValue,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react'

const PriceSlider = () => {
  return (
    <Box>
      <Text>Desde</Text>
      <NumberInput size="xs" maxW={16}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Hasta</Text>
      <NumberInput size="xs" maxW={16}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text color={useColorModeValue('gray.900', 'gray.400')}>
        Precio: $0 - $10000
      </Text>
    </Box>
  )
}

export default PriceSlider
