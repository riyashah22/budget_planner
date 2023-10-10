const express = require('express')
const transactionsRoute = express.Router();
const { createTransactionCtrl,
    getTransactionsCtrl,
    getTransactionCtrl,
    deleteTransactionCtrl,
    updateTransactionCtrl, } = require('../../controllers/transactions/transactionCtrl')

const isLogin = require("../../middlewares/isLogin");

// POST/api/v1/transactions
transactionsRoute.post('/', isLogin, createTransactionCtrl)


// GET/api/v1/transactions
transactionsRoute.get('/', getTransactionsCtrl)
// GET/api/v1/transactions/:id
transactionsRoute.get('/:id', getTransactionCtrl)
// DELETE/api/v1/transactions/:id
transactionsRoute.delete('/:id', deleteTransactionCtrl)
// PUT/api/v1/transactions/
transactionsRoute.put('/:id', updateTransactionCtrl)




module.exports = transactionsRoute;