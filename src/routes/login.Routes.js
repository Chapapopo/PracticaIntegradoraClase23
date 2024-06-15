import express from 'express';
import passport from "passport";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login routes
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user with local strategy
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *     responses:
 *       302:
 *         description: Redirects to home on success, log on failure
 *         headers:
 *           Location:
 *             description: URL to redirect to
 *             schema:
 *               type: string
 */
router.post("/", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/log',
  }));

export default router;
