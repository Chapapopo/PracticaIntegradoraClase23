import express from 'express';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Logout
 *   description: Logout route
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Log out the current user
 *     tags: [Logout]
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       401:
 *         description: Unauthorized, user not logged in
 */
router.post("/", (req, res) => {
    // Destruye la sesión, eliminando el usuario de la sesión
    req.session.destroy();
    res.send("Sesión cerrada correctamente");
});

export default router;
