import express from 'express';
import { ensureAuthenticated } from '../services/funciones.js';
import homeController from '../controllers/homeController.js'; // Importa el controlador para la lógica de la página de inicio

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Home page routes
 */

/**
 * @swagger
 * /home:
 *   get:
 *     summary: Get the home page
 *     tags: [Home]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns the home page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               description: HTML content of the home page
 *       401:
 *         description: Unauthorized
 */
router.get('/', ensureAuthenticated, homeController.getHome);

export default router;
