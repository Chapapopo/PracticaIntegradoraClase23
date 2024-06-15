import express from 'express';
import { ensureAuthenticated } from '../services/funciones.js';
import mockingController from '../controllers/mockingController.js'; // Importa el controlador para la lógica de la página de inicio

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Home page route
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get data for the home page
 *     tags: [Home]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Data retrieved successfully
 *       401:
 *         description: Unauthorized, user not authenticated
 */
router.get('/', ensureAuthenticated, mockingController.getMocking);

export default router;

