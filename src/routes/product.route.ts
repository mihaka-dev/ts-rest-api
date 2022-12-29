import { Router } from 'express'
import { createProduct, getProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

// http://{URL}/product
ProductRouter.get('/', getProduct)
ProductRouter.get('/:name', getProduct)
ProductRouter.post('/', createProduct)
