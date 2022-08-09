import { useState } from 'react'

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  IconButton,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaUserAlt } from 'react-icons/fa'

import userSchema from '../../validations/UserValidation'

import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm'

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  })

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
                  {/* Registrarse  */}
                  <SignUpForm />
                </TabPanel>
                <TabPanel>
                  {/* Iniciar sesion  */}
                  <LogInForm />
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
