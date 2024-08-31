const express = require('express')
const { addExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController')

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Expense:
 *       type: object
 *       required:
 *         - amount
 *         - date
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the expense
 *         amount:
 *           type: number
 *           description: The amount spent
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the expense
 *         category:
 *           type: string
 *           description: The category of the expense
 *         description:
 *           type: string
 *           description: A brief description of the expense
 *         mode:
 *           type: string
 *           description: Mode of payment
 *       example:
 *         id: 0wq3r4fttrbvds
 *         amount: 10
 *         category: Food
 *         date: 2024-08-26
 *         description: Kurkure
 *         mode: gpay
 */

/**
 * @swagger
 * /api/expenses:
 *   get:
 *     summary: Retrieves all expenses
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: A list of expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Expense'
 */
router.get('/', getExpenses)

/**
 * @swagger
 * /api/expenses:
 *   post:
 *     summary: Creates a new expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expense'
 *     responses:
 *       201:
 *         description: The expense was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 */
router.post('/', addExpense)

/**
 * @swagger
 * /api/expenses/{id}:
 *   put:
 *     summary: updates an existing expense
 *     tags: [Expenses]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ID of the expense to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expense'
 *     responses:
 *       200:
 *         description: The expense was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       404:
 *         description: The expense was not found
 *         content:
 *           application/json:
 *             schema:
 *               message: "Expense not found"
 */
router.put('/', updateExpense)
/**
 * @swagger
 * /api/expenses/{id}:
 *   delete:
 *     summary: deletes an existing expense
 *     tags: [Expenses]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ID of the expense to update
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: The expense was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       404:
 *         description: The expense was not found
 *         content:
 *           application/json:
 *             schema:
 *               message: "Expense not found"
 */
router.delete('/', deleteExpense)

module.exports = router;