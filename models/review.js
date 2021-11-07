const mongoose = require('mongoose');


const reviewSchema =  new mongoose.Schema({

    rating:{
      type:Number,
      min:0,
      max:5
    },
    comment:{
        type:String,
        require:true

    },
    user:{
      type:String,
      trim:true
    }
});

const Review  = new mongoose.model('Review',reviewSchema);
module.exports = Review;