const express = require('express')
const accountsRoute = express.Router();
const { createAccountCtrl, getAccountCtrl, getSingleAccountCtrl, deleteAccountCtrl, updateAccountCtrl } = require('../../controllers/accounts/accountCtrl')
const isLogin = require("../../middlewares/isLogin");

// POST/api/v1/accounts
accountsRoute.post('/', isLogin, createAccountCtrl)
// GET/api/v1/accounts
accountsRoute.get('/', getAccountCtrl)
// GET/api/v1/accounts/:id
accountsRoute.get('/:id', getSingleAccountCtrl)

// DELETE/api/v1/accounts/:id
accountsRoute.delete('/:id', deleteAccountCtrl)
// PUT/api/v1/accounts/:id
accountsRoute.put('/:id', updateAccountCtrl)





module.exports = accountsRoute;