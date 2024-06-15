/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         title:
 *           type: string
 *           description: The title of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         price:
 *           type: number
 *           description: The price of the product
 *         quantity:
 *           type: integer
 *           description: The quantity of the product
 *         category:
 *           type: string
 *           description: The category of the product
 *         brand:
 *           type: string
 *           description: The brand of the product
 *       example:
 *         id: d5fE_asz
 *         title: Product 1
 *         description: This is a product
 *         price: 99.99
 *         quantity: 10
 *         category: Electronics
 *         brand: Brand A
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
import express from 'express';
import { ensureAdmin, ensureAuthenticated } from '../services/funciones.js';
import productController from '../controllers/productController.js'; // Importa el controlador para la lógica de productos

const router = express.Router();

// Ruta para ver un solo producto por ID
router.get('/:id', ensureAuthenticated, productController.getProductById);

// Ruta para borrar un producto por ID
router.delete('/:id', ensureAdmin, productController.deleteProductById);

export default router;

