const express = require('express')
const app = express()
const { products} = require("./data");
const peopleRouter= require("./routes/people")

const logger = (req,res,next) =>{
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.use(logger);
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1/people',peopleRouter)

app.get('/api/v1/test',(req,res) => {
    res.status(200).json({ message: "It worked!" });
})

app.get('/api/v1/products',(req,res) => {
    
    res.status(200).json(products);
})

app.get('/api/v1/products/:productID',(req,res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    if(!product){
        return res.json({ message: "That product was not found."})
    }
    res.json(product);
    
})

app.get('/api/v1/query',(req,res) => {

   const { search, limit,price } = req.query
   let myProducts = [...products]
   if (search) {
    myProducts = myProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    myProducts = myProducts.slice(0, parseInt(limit))
  }
  if (price){
    myProducts = myProducts.filter((product) => {
        return product.price <= Number(price)
    })
  }
  if (myProducts.length < 1) {
    return res.status(200).json({ message: "That product was not found."})
  }
  res.status(200).json(myProducts)
})




app.all('*',(req,res) => {
    res.status(404).send('<h1>Page not Found</h1>')
})
app.listen(3000, () => {
  console.log('Server is connected')
  
  
})