import { Router } from 'express'
import { registerUser, createSession } from '../controllers/auth.controller'

export const AuthRouter: Router = Router()

// http://{URL}/auth
AuthRouter.post('/', registerUser)
AuthRouter.post('/login', createSession)
