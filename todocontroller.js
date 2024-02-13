const todomodel=require('./schema')

exports.todo=async(req,res)=>
{
   const {title,description}=req.body
    try {
       
            const newtodo = new todomodel({
                title:title,
                description:description 
            })
            await newtodo.save()
            res.status(200).json(newtodo)

        
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }
}

exports.gettodo=async(req,res)=>
{
    const data=await todomodel.find()
    res.status(200).json(data)
}
