const express = require('express');
const fs = require('fs')
const path = require('path')
  const router = express.Router();

router.get('/', (req, res, next) =>{
 res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));

})
router.get('/add-product', (req, res) =>{
res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});
router.post('/product', (req, res)=>{
const products = [req.body]
fs.writeFile('products.json', JSON.stringify(products), (err)=>{
  if(err) throw "Unable to submit product to database"
} )

res.statusCode=301;
res.redirect('/');
});module.exports = router;