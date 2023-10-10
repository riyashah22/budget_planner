const express = require('express')
const { registerUserCtrl, loginUserCtrl, userProfileCtrl, deleteUserCtrl, updateUserCtrl } = require('../../controllers/users/usersCtrl')
const usersRoute = express.Router();
const isLogin = require("../../middlewares/isLogin");

// POST/api/v1/users/register
usersRoute.post('/register', registerUserCtrl);
// POST/api/v1/users/login
usersRoute.post('/login', loginUserCtrl)
// GET/api/v1/users/profile
usersRoute.get('/profile/', isLogin, userProfileCtrl)
// DELETE/api/v1/users/
usersRoute.delete('/', isLogin, deleteUserCtrl)

// PUT/api/v1/users/
usersRoute.put('/', isLogin, updateUserCtrl)


module.exports = usersRoute;