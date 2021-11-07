const express = require('express');
const Product = require('../models/product');
const router = express.Router();
const User = require('../models/user');
const {isLogged} =require('../middleware');



//add to cart
router.post('/cart/:productid/add',isLogged,async (req,res)=>{

    const {productid} = req.params;
    const product = await Product.findById(productid);
    const currentUser = req.user;
   
    currentUser.cart.push(product);
    await currentUser.save();
    req.flash('success','Item added to your successfully.')
    res.redirect(`/products/${productid}`);
})


//display the cart
router.get('/user/cart',isLogged,async(req,res)=>{
const userid = req.user._id;
const user   = await User.findById(userid).populate('cart');
res.render('cart/userCart',{user});

})


router.delete('/cart/:id/remove',async(req,res)=>{
     const productid  = req.params.id;
     const userid = req.user._id;
     //The $pull operator removes from an existing array all instances of a value or value that mathch a specified condition.
         await User.findByIdAndUpdate(userid,{$pull:{cart:productid}})
          // User.save();


     res.redirect('/user/cart');
})











module.exports = router;