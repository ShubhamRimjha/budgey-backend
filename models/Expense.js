const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    category: {
        type: String,
        required: true,
        enum: ['travel', 'food', 'snacks', 'home', 'misc', 'groceries'],
    },
    mode: {
        type: String,
    },
    description: {
        type: String,
        
    }
})

module.exports = mongoose.model('Expense', ExpenseSchema)