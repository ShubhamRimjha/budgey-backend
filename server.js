require('dotenv').config();

const connectMDB = require("./config/dbconnect");
const express = require('express')
const cors = require('cors')
const expenseRoutes = require('./routes/expenseRoutes')
const swaggerUI = require("swagger-ui-express")
const swaggerSpecs = require("./config/swagger")


connectMDB();

const app = express();
app.use(cors());
app.use(express.json());

// ping healthcheck
app.get('/', (req, res) => res.send("API up and running..."))

// swagger 
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs))

// expense routes
app.use('/api/v1/expenses', expenseRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

