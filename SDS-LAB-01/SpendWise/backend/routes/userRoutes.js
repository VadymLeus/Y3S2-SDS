const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUser, deleteUser } = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API для роботи з користувачами
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Реєстрація нового користувача
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Ім'я користувача
 *               email:
 *                 type: string
 *                 description: Email користувача
 *               password:
 *                 type: string
 *                 description: Пароль користувача
 *               codeword:
 *                 type: string
 *                 description: Кодове слово
 *           example:
 *             username: "TestUser"
 *             email: "testuser@example.com"
 *             password: "password123"
 *             codeword: "secureword"
 *     responses:
 *       201:
 *         description: Реєстрація успішна
 *       400:
 *         description: Невірні дані
 *       500:
 *         description: Помилка сервера
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Авторизація користувача
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email користувача
 *               password:
 *                 type: string
 *                 description: Пароль користувача
 *           example:
 *             email: "testuser@example.com"
 *             password: "password123"
 *     responses:
 *       200:
 *         description: Вхід успішний
 *       400:
 *         description: Невірні дані
 *       404:
 *         description: Користувач не знайдений
 *       500:
 *         description: Помилка сервера
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /api/users/user/{id}:
 *   get:
 *     summary: Отримання інформації про користувача
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор користувача
 *     responses:
 *       200:
 *         description: Інформація про користувача
 *       404:
 *         description: Користувач не знайдений
 *       500:
 *         description: Помилка сервера
 */
router.get("/user/:id", getUser);

/**
 * @swagger
 * /api/users/user/{id}:
 *   delete:
 *     summary: Видалення користувача за ідентифікатором
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор користувача
 *     responses:
 *       200:
 *         description: Користувача успішно видалено
 *       404:
 *         description: Користувач не знайдений
 *       500:
 *         description: Помилка сервера
 */
router.delete("/user/:id", deleteUser);

module.exports = router;
