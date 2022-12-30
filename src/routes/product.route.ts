import { Router } from 'express'
import { createProduct, getProduct, updateProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

// http://{URL}/product
ProductRouter.get('/', getProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.post('/', createProduct)
ProductRouter.put('/:id', updateProduct)
