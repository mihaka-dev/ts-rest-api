import { Request, Response } from 'express'
import crypto from 'crypto'
import {
  addProductToDB,
  deleteProductById,
  getProductById,
  getProductFromDB,
  updateProductById
} from '../services/product.service'
import { logger } from '../utils/logger'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = crypto.randomUUID()
  const { error, value } = createProductValidation(req.body)

  if (error) {
    logger.error('ERR: product - create =', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  try {
    await addProductToDB(value)
    logger.info('Success add new product')
    return res.status(200).send({ status: true, statusCode: 201, message: 'Add Product Success' })
  } catch (error) {
    logger.error('ERR: product - create =', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  if (id) {
    const product = await getProductById(id)
    if (!product) {
      logger.info('Product not found')
      return res.status(200).send({ status: false, statusCode: 404, message: 'Product not found', data: {} })
    }
    logger.info('Success get detail product')
    return res.status(200).send({ status: true, statusCode: 200, data: product })
  }
  const products: any = await getProductFromDB()
  logger.info('Success get data all product')
  return res.status(200).send({ status: true, statusCode: 200, data: products })
}

export const updateProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  const { error, value } = updateProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - update =', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  try {
    const result = await updateProductById(id, value)

    if (!result) {
      logger.info('Product not found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Product not found', data: {} })
    }

    logger.info('Success update product')
    return res.status(200).send({ status: true, statusCode: 200, message: 'Update Product Success' })
  } catch (error) {
    logger.error('Failed update product', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error, data: {} })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  try {
    const result = await deleteProductById(id)

    if (!result) {
      logger.info('Product not found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Product not found', data: {} })
    }

    logger.info('Succes delete product')
    return res.status(200).send({ status: true, statusCode: 200, message: 'Delete product success' })
  } catch (error) {
    logger.error('ERR: product - delete = ', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error, data: {} })
  }
}
