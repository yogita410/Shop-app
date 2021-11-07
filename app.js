

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}










const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session =  require('express-session');
const productRoutes  =  require('./routes/productRoutes');
const authRoutes  =  require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const flash  = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const  User = require('./models/user');




mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB CONNECTED!!'))
.catch((err)=> {console.log(err)});
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(flash());

const sessionConfig = {
    secret:'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,
}
app.use(session(sessionConfig));
app.use(flash());
// seedDB();



 app.use(passport.initialize());
 app.use(passport.session());
 passport.use(new LocalStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());





app.use((req,res,next)=>{
 res.locals.success= req.flash('success');
 res.locals.error =req.flash('error');
 res.locals.currentUser =req.user;
 next();
//success vala variable ya aproperty ab hr template pr available ho jayega

});


app.get('/',(req,res)=>{

    res.render('products/home');
});
app.get('/error',(req,res)=>{
    res.render('error');
})


app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);




app.listen(process.env.PORT || 2323,(req,res)=>{
    console.log('Server running at port 2323')

})