const mong=require('mongoose')

const todoschema=new mong.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
})

const add=mong.model("add",todoschema)

module.exports=add
