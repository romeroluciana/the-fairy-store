import {
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Text,
    useColorModeValue,
  Box
} from '@chakra-ui/react'

const PriceSlider = () => {
  return (
    <Box >
      <Text>Filtrar por precio</Text>
      <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text color={useColorModeValue('gray.900', 'gray.400')}>
        Precio: $0 - $10000
      </Text>
    </Box>
  )
}

export default PriceSlider
