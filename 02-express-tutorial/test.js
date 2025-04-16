const express = require('express');
const app = express();

// Middleware function (runs on every request)
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next(); // Move to the next middleware or route handler
};

app.use(logger); // Apply middleware globally

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
/////////////////////////////////////////////////////////////////////////////////

// const express = require('express')
// const app = express()
// const { products } = require("./data");

// app.use(express.static("./public"))

// app.get('/api/v1/test',(req,res) => {
//     res.status(200).json({ message: "It worked!" });
// })

// app.get('/api/v1/products',(req,res) => {
    
//     res.status(200).json(products);
// })

// app.get('/api/v1/products/:productID',(req,res) => {
//     const idToFind = parseInt(req.params.productID); 
//     const product = products.find((p) => p.id === idToFind);
//     if(!product){
//         return res.json({ message: "That product was not found."})
//     }
//     res.json(product);
    
// })

// app.get('/api/v1/query',(req,res) => {
//    const { search, limit,price } = req.query
//    //console.log(req.query);
//    let myProducts = [...products]
//    if (search) {
//     myProducts = myProducts.filter((product) => {
//       return product.name.startsWith(search)
//     })
//   }
//   if (limit) {
//     myProducts = myProducts.slice(0, parseInt(limit))
//   }
//   if (price){
//     myProducts = myProducts.filter((product) => {
//         return product.price <= Number(price)
//     })
//   }
//   if (myProducts.length < 1) {
//     return res.status(200).json({ message: "That product was not found."})
//   }
//   res.status(200).json(myProducts)
// })

// app.all('*',(req,res) => {
//     res.status(404).send('<h1>Page not Found</h1>')
// })
// app.listen(3000, () => {
//   console.log('Server is connected')
  
  
// })