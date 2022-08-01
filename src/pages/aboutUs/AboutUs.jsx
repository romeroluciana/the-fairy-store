import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react'

export default function AboutUs() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/ecab8688-cccd-4257-ac81-51dc6d219983'
              }
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#DBE9B7',
                zIndex: -1,
              }}
            >
              We are
            </Text>
            <br />
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#DBE9B7',
                zIndex: -1,
              }}
            >
              The fairy store
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            We work with passion to offer you a collection of fashion and
            lifestyle accessories that enhance your personality, express your
            inner world and make you feel good. We want to be the place to find
            the right gift for the person you love.
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}
