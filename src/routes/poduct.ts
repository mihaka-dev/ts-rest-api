import { NextFunction, Request, Response, Router } from 'express'

export const ProductRouter: Router = Router()

// http://{URL}/product
ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu', price: 500000 }] })
})
