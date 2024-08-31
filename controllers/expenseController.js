const Expense = require('../models/Expense')

// @desc    ADD a new expense   
// @route   POST /api/v1/expenses
// @access Public
exports.addExpense = async (req, res) => {
    try {
        const { amount, date, category, mode, description } = req.body

        const newExpense = new Expense({
            amount,
            date,
            category,
            mode,
            description
        })
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        console.log("Error saving expense", error);
        res.status(501).json({ message: error.message })
    }
}

// @desc   Get all expenses
// @route  GET /api/expenses
// @access Public
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc Modify an expense
// @route PUT /api/expenses
// @access Public
exports.updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, date, category, mode, description } = req.body;

        const updatedExpense = await Expense.findByIdAndUpdate(id, { amount, date, category, mode, description },
            { new: true, runValidators: true });

        if (!updatedExpense) return res.status(404).json({ message: "Expense not found" });

        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// @desc Delete an expense
// @route DELETE /api/expenses
// @access Public
exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await Expense.findByIdAndDelete(id);

        if (!deletedExpense) return res.status(404).json({ message: "Expense not found" })

        res.status(200).json({ message: "Expense deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}