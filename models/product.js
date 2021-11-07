const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        required:true

    },
    price:{
        type:Number,
        min:0
    },
    img:{
        type:String,
        trim:true,
        default:'/images/product.jpg'
    },
    desc:{
        type:String,
        trim:true

    },
    category:{
        type:String,
        required:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId, //Id is not primitive data type here we are fetching the ObjectId from mongoose schema type 
            ref:'Review'
        }
    ]


});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;