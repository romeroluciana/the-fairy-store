import React, { useState } from 'react'

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Carousel = () => {
  const [slider, setSlider] = useState()
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  const cards = [
    {
      title: 'Make it fashion with',
      subtitle: 'The fairy store ✨',
      image: 'https://wallpaperaccess.com/full/4662159.jpg',
    },
    {
      title: 'Find the gift',
      subtitle: 'you are looking for!',
      image: 'https://wallpaperaccess.com/full/144511.png',
    },
  ]

  return (
    <Box
      position={'relative'}
      height={{ base: '300px', md: '600px' }}
      width={'full'}
      overflow={'hidden'}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        color={'white'}
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        color={'white'}
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'1xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container maxW={'3xl'}>
              <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
              >
                <Heading
                  color={'white'}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}
                >
                  {card.title} <br />
                  <Text as={'span'} color={'white'}>
                    {card.subtitle}
                  </Text>
                </Heading>

                <Stack
                  direction={'column'}
                  spacing={3}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}
                >
                  <Button
                    rounded={'full'}
                    size="lg"
                    bg={'pink.400'}
                    color={'white'}
                    _hover={{
                      bg: 'pink.500',
                    }}
                  >
                    Shop now
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel
