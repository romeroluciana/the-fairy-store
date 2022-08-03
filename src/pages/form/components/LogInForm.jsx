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
  password: string().required('The password is required').min(8),
})

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { signIn, user } = useUser()

  const onSubmit = ({ email, password }) => {
    console.log(email, password)
    axios
      .post(
        'https://strapiecommerce-production-6186.up.railway.app/api/auth/local',
        {
          identifier: email,
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

  console.log(user, signIn)

  return (
    <Stack spacing={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" isInvalid={errors.email} isRequired>
          <FormLabel htmlFor="email" name="email">
            Email address
          </FormLabel>
          <Input
            type="email"
            id="emailLog"
            name="email"
            {...register('email', {
              required: 'Enter a valid email',
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        {/* Iniciar sesion - password */}

        <FormControl id="password" isInvalid={errors.password} isRequired>
          <FormLabel htmlFor="password" name="password">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="passwordLog"
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
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            bg={'pink.400'}
            color={'white'}
            _hover={{
              bg: 'pink.500',
            }}
          >
            Log in
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default LogInForm
