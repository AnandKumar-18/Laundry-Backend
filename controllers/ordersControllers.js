




const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Orders = require('../models/Orders')

const JWT_SECRET="laundry-service"


//create user

const createOrder =async(req,res)=>{
    // check user already there or not
    try{
        
        const {orderItems,totalItems,totalPrice}=req.body
        // console.log(orderItems,"object")
        console.log(req.user  , "idddd") 
        const neworder=await Orders.create(
            {orderItems,
               totalPrice,
               totalItems,
            user:req.user.id
        })
        res.send({sucsess:"created"})
        
    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error 1234"})
    }
}







const getOrderList =async(req,res)=>{
    try{
    const orderlist =await Orders.find({user:req.user.id})
    res.json(orderlist)
    console.log(orderlist)
    }catch(error){
        res.status(500).json({error:"internal server error at orders"})
    }

}


module.exports={createOrder,getOrderList}