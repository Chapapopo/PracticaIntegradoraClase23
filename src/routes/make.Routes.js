import express from 'express';
import { ensureAdmin, ensureAdminPremium } from '../services/funciones.js';
import makeController from '../controllers/makeController.js'; // Importa el controlador para la lógica de productos

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management routes
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     security:
 *       - adminPremium: []
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *       401:
 *         description: Unauthorized, user not admin premium
 */
router.get('/', ensureAdminPremium, makeController.makeProduct);

/**
 * @swagger
 * /products/crear:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - adminPremium: []
 *     responses:
 *       200:
 *         description: Product created successfully
 *       401:
 *         description: Unauthorized, user not admin premium
 */
router.post('/crear', ensureAdminPremium, makeController.crearProducto);

/**
 * @swagger
 * /products/borrar:
 *   post:
 *     summary: Delete a product
 *     tags: [Products]
 *     security:
 *       - adminPremium: []
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       401:
 *         description: Unauthorized, user not admin premium
 */
router.post('/borrar', ensureAdminPremium, makeController.borrarProducto);

/**
 * @swagger
 * /products/modificar:
 *   post:
 *     summary: Modify a product
 *     tags: [Products]
 *     security:
 *       - adminPremium: []
 *     responses:
 *       200:
 *         description: Product modified successfully
 *       401:
 *         description: Unauthorized, user not admin premium
 */
router.post('/modificar', ensureAdminPremium, makeController.modificarProducto);

export default router;


