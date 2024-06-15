import express from 'express';
import { ensureUser } from '../services/funciones.js';
import cartController from '../controllers/cartController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management routes
 */

/**
 * @swagger
 * /carts/{id}:
 *   delete:
 *     summary: Delete all products from a cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Cart ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: All products deleted from the cart
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart not found
 */
router.delete('/:id', ensureUser, cartController.deleteAllProductos);

/**
 * @swagger
 * /carts/{idCarrito}/productos/{idProducto}:
 *   delete:
 *     summary: Delete a product from a cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: idCarrito
 *         in: path
 *         required: true
 *         description: Cart ID
 *         schema:
 *           type: string
 *       - name: idProducto
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted from the cart
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart or Product not found
 */
router.delete('/:idCarrito/productos/:idProducto', ensureUser, cartController.deleteProductoDelCarrito);

/**
 * @swagger
 * /carts:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: New cart created
 *       401:
 *         description: Unauthorized
 */
router.post('/', ensureUser, cartController.crearNuevoCarrito);

/**
 * @swagger
 * /carts/{idCarrito}/productos/{idProducto}:
 *   post:
 *     summary: Add a product to a cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: idCarrito
 *         in: path
 *         required: true
 *         description: Cart ID
 *         schema:
 *           type: string
 *       - name: idProducto
 *         in: path
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product added to the cart
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart or Product not found
 */
router.post("/:idCarrito/productos/:idProducto", ensureUser, cartController.agregarProductoAlCarrito);

/**
 * @swagger
 * /carts/{id}:
 *   get:
 *     summary: Get a cart by ID
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Cart ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the cart
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart not found
 */
router.get('/:id', ensureUser, cartController.mostrarCarrito);

/**
 * @swagger
 * /carts/{id}/purchase:
 *   post:
 *     summary: Complete the purchase for a cart
 *     tags: [Cart]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Cart ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Purchase completed
 *       404:
 *         description: Cart not found
 */
router.post('/:id/purchase', cartController.terminarCompra);

export default router;

