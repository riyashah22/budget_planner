const express = require('express')
require('./config/dbConnect')
const cors = require('cors')
const app = express()
const globalErrHandler = require("./middlewares/globalErrHandler");

// Middlewares
app.use(express.json()); //Pass incoming data
// Cors middleware
app.use(cors())
// Routes
const usersRoute = require('./routes/users/usersRoute')
const transactionsRoute = require('./routes/transactions/transactionRoute')
const accountsRoute = require('./routes/accounts/accountsRoute')

// Routes

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/transactions', transactionsRoute);
app.use('/api/v1/accounts', accountsRoute);



// Error Handlers
app.use(globalErrHandler);

// List to Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`));