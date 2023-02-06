const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    if(req.url == '/post'){
        res.write('<!DOCTYPE html');
        res.write('<html>')
        res.write(`
         <head><title>Shooping::Post</title></head>
          <body>
          <h2>Post Product</h2>
          <form action='/add-product' method='POST'>
          <input type="text" name="product">
          <input type="submit" value="Post">
          </form>
          </body>
        `)
       return  res.end()
    }
    if(req.url ='/add-product' && req.method =='POST'){

        fs.writeFileSync('data.text', 'Data submitted')
        console.log('Data Submitted')
    }
    res.write('<!DOCTYPE html');
    res.write('<html>')
    res.write(`
      <head><title>Shooping::Post</title></head>
      <body>
      <h2>Shooping Home Page</h2>
      </body>
    `)
    res.end()
})
server.listen(3001)