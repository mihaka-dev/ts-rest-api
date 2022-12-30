import bcrypt from 'bcrypt'

// endcode
export const hashing = (password: string) => {
  return bcrypt.hashSync(password, 10)
}

// decode
export const checkPassword = (password: string, userPassword: string) => {
  return bcrypt.compareSync(password, userPassword)
}
