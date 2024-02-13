const express=require('express')

const todocontroller=require('./todocontroller')

const router=new express.Router()

router.post('/add',todocontroller.todo)

router.get('/gettodo',todocontroller.gettodo)


module.exports=router