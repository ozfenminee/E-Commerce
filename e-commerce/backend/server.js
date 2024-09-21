const express= require("express");


const app=express();
app.get("/mert",(req,res)=>{
    res.send("Hello Express.js")
}
);
app.listen(3000,()=>
{
    console.log(`Sunucu ${3000} portunda çalışıyor.`)
})