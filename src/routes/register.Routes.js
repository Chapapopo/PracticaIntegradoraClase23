import express from 'express';
import registerController from '../controllers/registerController.js'; // Importa el controlador para la ruta de creación de usuarios

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Register
 *   description: Register routes
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Create a new user
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Invalid input, user not created
 */
router.post('/', registerController.createUser);

export default router;
