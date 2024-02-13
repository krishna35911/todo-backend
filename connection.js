const mongo=require('mongoose')

const connstring=process.env.mongoString

mongo.connect(connstring).then(()=>
{
    console.log('connected');
}).catch((err)=>
{
    console.log(`failed due to ${err}`);
})

