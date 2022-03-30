const mongoose = require("mongoose");



const ProductSchema=mongoose.Schema({
    id:{type:String,required:true,unique:true},
    productPic :{type:String,required:true},
    productName:{type:String,required:true},
    productBrand : {type:String,required:true},
    priceOfProduct :{type:Number,required:true},

},{
    timestamps:true,
    versionKey:false
})
const product2 = mongoose.model("product2", ProductSchema)

module.exports = product2;