import { NextFunction, Request, Response, Router } from 'express'

export const HealthRouter: Router = Router()

// http://{URL}/health
HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: true, statusCode: 200 })
})
