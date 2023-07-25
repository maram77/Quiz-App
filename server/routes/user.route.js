const router = require('express').Router();
//const router = express.Router()
const userController = require('../controller/user.controller')

require('dotenv').config()

router.get('/user', userController.getUser)
router.post('/add', userController.postUser)
router.post('/setScore', userController.setScore)
module.exports=router
