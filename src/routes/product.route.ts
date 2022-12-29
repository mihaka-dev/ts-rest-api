import { NextFunction, Request, Response, Router } from 'express'
import { createProductValidation } from '../validation/product.validation'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

// http://{URL}/product
ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get data all product')
  return res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu', price: 500000 }] })
})

// http://{URL}/product
ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)

  if (error) {
    logger.error('ERR: product - create =', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  logger.info('Success add new product')
  return res.status(200).send({ status: true, statusCode: 200, message: 'Add Product Success', data: value })
})
