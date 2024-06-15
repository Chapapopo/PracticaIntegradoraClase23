import express from 'express';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Log
 *   description: Log page routes
 */

/**
 * @swagger
 * /log:
 *   get:
 *     summary: Get the log page
 *     tags: [Log]
 *     responses:
 *       200:
 *         description: Returns the log page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               description: HTML content of the log page
 */
router.get("/", (req, res) => {
    res.render("log", { title: "log" });
});

export default router;
