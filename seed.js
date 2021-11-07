const Product = require('./models/product');



const products = [
  

/**********************************************COMPUTERS****************************************************************************************************************************************************************************************************************************************************************** */
    {
        name:"MacBook pro",
        price:50000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. ",
        img:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:`Pilates 14" Touch Screen Laptop 12GB Memory`,
        price:150000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        img:"https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:`Pilates 16" Touch Screen Laptop 12GB Memory`,
        price:150000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        img:"https://images.unsplash.com/photo-1607603289612-71ae134aa577?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:`JP Gaming Laptop 15.6" Laptop 256Gb`,
        price:80000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. ",
        img:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:"Corr Desktop 12Gb Memory,WiFi,Bluetooth,keyboard Mouse",
        price:50000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. ",
        img:"https://images.unsplash.com/photo-1565375706404-082d37dd1f5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:"DELL Inspiron i5",
        price:50000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. ",
        img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:`Hp Inspiron i7 processor`,
        price:150000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        img:"https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:`Pilates 16" Touch Screen Laptop 12GB Memory`,
        price:150000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
        img:"https://images.unsplash.com/photo-1588476376802-9e96f9d967f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGxhcHRvcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:`JP Gaming Laptop 15.6" Laptop 256Gb`,
        price:80000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. ",
        img:"https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxsYXB0b3BzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    {
        name:"Corr Desktop 12Gb Memory,WiFi,Bluetooth,keyboard Mouse",
        price:50000,
        desc:"I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. ",
        img:"https://images.unsplash.com/photo-1569441508845-c6da9a35924c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxsYXB0b3BzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Computers"
    },
    /*********************************************************************************************************************************************************************************************************************************************************************************************** */
    {
        name:"Apple iPhone 11 (64GB ROM, 4GB RAM, MHDF3HN/A, Purple)",
        price:49900.00 ,
        desc:"The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc.It is the 13th generation, lower-priced iPhone, succeeding the iPhone XR.  ",
        img:"https://images.unsplash.com/photo-1592286927505-1def25115558?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lMTF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        category:"Mobiles"
    },










    /************************************************************************************************************************************************************************************************************************************************************************************************************* */

    {
        name:"Ipad",
        price:400,
        desc:"The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the 13th generation, lower-priced iPhone, succeeding the iPhone XR.",
        img:"https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
        category:"Tablets"
    },















    /******************************************************************************************************************************************************************************************** */
    {
        name:"Drone",
        price:999,
        desc:"The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc.",
        img:"https://media.istockphoto.com/photos/drone-flying-at-the-satellite-antenna-array-picture-id1079724558?b=1&k=20&m=1079724558&s=170667a&w=0&h=GWZAhujbly8NawcLI5yRhnZ9YMYSclE5ix_T0j2YPv8=",
        category:"Drones"
    },
  

]
const seedDb = async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("DB seeded!!!");

}

module.exports = seedDb;
