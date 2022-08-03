import * as yup from 'yup'
const userSchema = yup.object({
  email: yup.string().email().required('You must enter your email'),
  password: yup
    .string()
    .required('You must enter your password')
    .min(8, 'The password must have minimum 8 character'),
  name: yup.string().required('You must enter your name'),
})

export default userSchema
