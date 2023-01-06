const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const prod_Schema=new Schema({
    productID:{type:String,unique:true},
    product_type:{type:String},
    product_name:{type:String},
    product_price:{type:Number},
    available_quantity:{type:Number}
})
const cust_Schema=new Schema({
    customerID:{type:String,unique:true},
    cust_name:{type:String},
    cust_email:{type:String,unique:true},
    balance:{type:Number}
})


const ord_Schema=new Schema({
    cust_id:{type:String,unique:true},
    product_id:{type:String,unique:true},
    product_name:{type:String},
    quantity:{type:String}
})

const prod_model=mongoose.model("prod_model",prod_Schema);
const cust_model=mongoose.model("cust_model",cust_Schema);
const ord_model=mongoose.model("ord_model",ord_Schema);

module.exports={prod_model,cust_model,ord_model};