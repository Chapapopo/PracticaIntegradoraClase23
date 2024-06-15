import express from 'express';
import githubAuthController from '../controllers/githubAuthController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication routes
 */

/**
 * @swagger
 * /auth/github:
 *   get:
 *     summary: Initiates GitHub authentication
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirects to GitHub for authentication
 */

/**
 * @swagger
 * /auth/github/callback:
 *   get:
 *     summary: Handles GitHub authentication callback
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Successful authentication
 *       401:
 *         description: Authentication failed
 */

router.get('/github', githubAuthController.githubAuth);

router.get('/github/callback', githubAuthController.githubCallback);

export default router;
