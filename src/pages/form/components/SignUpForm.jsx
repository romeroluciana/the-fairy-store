import { useState } from 'react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Stack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'

import useUser from '../../../hooks/useUser'

const userSchema = object({
  email: string().email().required('The email is required'),
  password: string()
    .required('The password is required')
    .min(8, 'Enter at least 8 characters'),
  name: string().required('The name is required'),
})

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { signIn } = useUser()

  const onSubmit = ({ name, email, password }) => {
    axios
      .post(
        'https://strapiecommerce-production-6186.up.railway.app/api/auth/local/register',
        {
          username: name,
          email,
          password,
        }
      )
      .then((response) => {
        signIn(response.data.user)
      })
      .catch((error) => {
        console.log('An error occurred:', error.response)
      })
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  })

  return (
    <Stack spacing={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* REGISTRARSE - nombre completo */}
        <FormControl isInvalid={errors.name} id="firstName" isRequired>
          <FormLabel htmlFor="name" name="name">
            Full Name
          </FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            {...register('name', {
              required: 'Enter your full name',
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        {/* REGISTRARSE - email */}
        <FormControl id="email" isInvalid={errors.email} isRequired>
          <FormLabel htmlFor="email" name="email">
            Email address
          </FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            {...register('email', {
              required: 'Enter a valid email',
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        {/* REGISTRARSE - contraseña */}
        <FormControl id="passwordS" isInvalid={errors.password} isRequired>
          <FormLabel htmlFor="password" name="password">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              {...register('password', {
                required: 'Enter a password',
                minLength: {
                  value: 8,
                  message: 'The password must have at least 8 characters',
                },
              })}
            />
            <InputRightElement h={'full'}>
              <Button
                variant={'ghost'}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Stack spacing={10} pt={2}>
          <Button
            loadingText="Submitting"
            size="lg"
            type="submit"
            isLoading={isSubmitting}
            bg={'pink.400'}
            color={'white'}
            _hover={{
              bg: 'pink.500',
            }}
          >
            Sign up
          </Button>
        </Stack>{' '}
      </form>
    </Stack>
  )
}

export default SignUpForm
