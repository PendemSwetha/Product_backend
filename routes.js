const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const {prod_model,cust_model,ord_model}=require('./Schema.js');
router.post('/product',async(req,res)=>{
    try{
        const products=await prod_model.create(req.body)
        res.status(200).json({
            products:products,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})
router.post('/customer',async(req,res)=>{
    try{
        const customer=await cust_model.create(req.body)
        res.status(200).json({
            customer:customer,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})

router.post('/orders',async(req,res)=>{
    try{
        const orders=await ord_model.create(req.body)
        res.status(200).json({
            orders:orders,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})

router.get('/orders/:orderID',async(req,res)=>{
    try{
        const orders=await ord_model.findOne({_id:req.params.orderID})
        res.status(200).json({
            orders:orders,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})

router.get('/product/:productID',async(req,res)=>{
    try{
        const product=await prod_model.findOne({productID:req.params.productID})
        res.status(200).json({
            product:product,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})
router.get('/product/product_type',async(req,res)=>{
    try{
        const product=await prod_model.findOne({product_type:req.params.product_type})
        res.status(200).json({
            product:product,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})
router.get('/customer/:customerID',async(req,res)=>{
    try{
        const customer=await cust_model.findOne({customerID:req.params.customerID})
        res.status(200).json({
            customer:customer,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})

router.put('/:product_name/:available_quantity',async(req,res)=>{
    try{
        const product=await prod_model.updateOne(req.body)
        res.status(200).json({
            product:product,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
    
})

router.put('/:email/costOfAnOrder',async(req,res)=>{
    try{
        const customer=await cust_model.updateOne(req.body)
        res.status(200).json({
            customer:customer,
            status:"success"
        })
    }
    catch(e){
        res.status(400).json({
            message:e.message,
            status:"failure"
        })
    }
})
module.exports=router;