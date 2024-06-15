import express from 'express';
import { ensureUser } from '../services/funciones.js';
import chatController from '../controllers/chatController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Chat routes
 */

/**
 * @swagger
 * /chat:
 *   get:
 *     summary: Get the chat page
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns the chat page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               description: HTML content of the chat page
 *       401:
 *         description: Unauthorized
 */

router.get('/', ensureUser, chatController.mostrarChat);

export default router;
