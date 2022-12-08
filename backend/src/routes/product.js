import { Router } from "express";

import { getProducts,postProduct } from "../controllers/productControler.js";

const router = Router()

router.get('/products',getProducts)

router.post('/product',postProduct)

export default router