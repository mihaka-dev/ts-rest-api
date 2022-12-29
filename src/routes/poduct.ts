import { NextFunction, Request, Response, Router } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

// http://{URL}/product
ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get data all product')
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu', price: 500000 }] })
})
