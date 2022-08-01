import {
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  IconButton,
  Box,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Heading,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme="pink"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<FaUserAlt />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Tabs isLazy colorScheme="pink">
              <TabList>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize="lg"
                  fontWeight="bold"
                  w="50%"
                >
                  Sign up
                </Tab>
                <Tab
                  _focus={{ boxShadow: 'none' }}
                  fontSize="lg"
                  fontWeight="bold"
                  w="50%"
                >
                  Log in
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack spacing={4}>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'} />
                        <InputRightElement h={'full'}>
                          <Button
                            variant={'ghost'}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={'pink.400'}
                        color={'white'}
                        _hover={{
                          bg: 'pink.500',
                        }}
                      >
                        Sign up
                      </Button>
                    </Stack>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'} />
                        <InputRightElement h={'full'}>
                          <Button
                            variant={'ghost'}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={'pink.400'}
                        color={'white'}
                        _hover={{
                          bg: 'pink.500',
                        }}
                      >
                        Log in
                      </Button>
                    </Stack>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Form
