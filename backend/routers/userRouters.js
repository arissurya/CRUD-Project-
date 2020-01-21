const express=require('express')
const {userControllers}= require('./../controllers')

const router=express.Router()

router.get('/user', userControllers.getUser)
router.post('/register', userControllers.postUser)

module.exports=router