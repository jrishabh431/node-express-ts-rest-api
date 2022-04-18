import { object, string, TypeOf } from 'zod'

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'Password in required',
    }).min(6, 'Password too short, should be 6 charaters or more.'),
    passwordConfirmation: string({
      required_error: 'Password confirm in required',
    }).min(6, 'Password too short, should be 6 charaters or more.'),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Password do not match',
    path: ['passwordConfirmation'],
  }),
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirmation'>