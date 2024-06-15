import express from 'express';
import passwordResetController from '../controllers/passwordResetController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PasswordReset
 *   description: Password reset routes
 */

/**
 * @swagger
 * /password-reset/request-reset:
 *   post:
 *     summary: Request password reset
 *     tags: [PasswordReset]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *     responses:
 *       200:
 *         description: Password reset email sent successfully
 *       404:
 *         description: User not found
 */

router.post('/request-reset', passwordResetController.requestReset);

/**
 * @swagger
 * /password-reset/reset-password/{token}:
 *   post:
 *     summary: Reset password
 *     tags: [PasswordReset]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Token for password reset
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 description: The new password
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid token or new password format
 *       404:
 *         description: User not found
 */

router.post('/reset-password/:token', passwordResetController.resetPassword);

export default router;

