import express from 'express';
import { ensureAuthenticated } from '../services/funciones.js';
import currentController from '../controllers/currentController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Current
 *   description: Current user routes
 */

/**
 * @swagger
 * /current:
 *   get:
 *     summary: Get the current authenticated user
 *     tags: [Current]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns the current authenticated user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The user ID
 *                 name:
 *                   type: string
 *                   description: The user name
 *                 email:
 *                   type: string
 *                   description: The user email
 *       401:
 *         description: Unauthorized
 */

router.get('/', ensureAuthenticated, currentController.mostrarUsuarioActual);

export default router;
