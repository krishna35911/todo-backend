require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./router')

require('./connection')

const todoserver=express()

todoserver.use(cors())

todoserver.use(express.json())

todoserver.use(router)

const port=4000 || process.env.port

todoserver.listen(port,()=>
{
    console.log(`server running at ${port}`);
})