import { Router } from 'express'
import { registerUser } from '../controllers/auth.controller'

export const AuthRouter: Router = Router()

// http://{URL}/auth
AuthRouter.post('/', registerUser)
