import { NextFunction, Request, Response, Router } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

// http://{URL}/health
HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get health')
  res.status(200).send({ status: true, statusCode: 200 })
})
