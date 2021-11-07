const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
//we cannnot use app  but router object has has all the http methods like GET,POST,PATCH,DELETE etc. It act as a Mini application.
// App is an express application
const{isLogged}  = require('../middleware')
;

//get all the products
router.get('/products',async (req,res)=>{
 try{
    const products = await Product.find({});
    res.render('products/index',{products});
   // res.render('products/index',{products,message:req.flash('success')});
 }
 catch(e){
    req.flash('error','oops something went wrong!!')
    res.redirect('/error');
 }
})
//get the new form to create new product
router.get('/products/new/',(req,res)=>{
    try{
        res.render('products/new');
    }
    catch(e){
        req.flash('error','oops something went wrong!!')
        res.redirect('/error');
    }
  
})
//create new product
router.post('/products/new',isLogged/*,isSeller*/,async (req,res)=>{
 try{
    const newProduct = {
        ...req.body
      };
      await Product.create(newProduct);
      
 }
 catch(e){
    req.flash('error','oops something went wrong!!')
    res.redirect('/error');
 }
})

//show a particular product
router.get('/products/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        //inflating the foundProducts with the reviews using populate
        const product = await Product.findById(id).populate('reviews');
        // console.log(product);
        res.render('products/show',{product});
        //res.render('products/show',{product,message:req.flash('success')});
    }
    catch(e){

          req.flash('error','oops something went wrong!!')
          res.redirect('/error');
        }


});

router.get('/products/:id/edit',isLogged,async (req,res)=>{
  try{
    const {id} = req.params;
    const product  = await Product.findById(id);

    res.render('products/edit',{product});
  }
  catch(e){
    req.flash('error','oops something went wrong!!')
    res.redirect('/error');
  }
});
router.patch('/products/:id',isLogged,async(req,res)=>{
   try{
    const updatedProduct = req.body;
    const {id} = req.params;
    await Product.findByIdAndUpdate(id,updatedProduct);
    res.redirect(`/products/${id}`);
   }
   catch(e){
    req.flash('error','oops something went wrong!!')
    res.redirect('/error');
   }

})
router.delete('/products/:id/delete',async(req,res)=>{

   try{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
   }
   catch(e){
    req.flash('error','oops something went wrong!!')
    res.redirect('/error');
   }

})

//Creating a review for each product
router.post('/products/:id/review',isLogged,async(req,res)=>{
 
  try{
        //console.log(req.body);
    // {rating: '3', comment: 'nice product' } here (Rating)number is type casted into Number autoatically.
 
    const {id} = req.params;
    const product  = await Product.findById(req.params.id);
    const{rating,comment} = req.body;
    const newReview = new Review({rating,comment,user:req.user.username});
    product.reviews.push(newReview);//i have pushed  whole review but id will be saved only
    await product.save();
    await newReview.save();
    req.flash('success','Successfully created your review!!')
   //key is success here 
    res.redirect(`/products/${id}`);
  }
  catch(e){
    req.flash('error','oops something went wrong!!')
    res.redirect('/error');
 
  
  }

})


//shop al category  Routes


router.get('/p/:category', async(req,res)=>{
                const { category} =  req.params;
    const products  =  await Product.find({category:`${category}`});
    res.render('products/index',{products})
})

module.exports  = router;