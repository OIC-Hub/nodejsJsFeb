 const pageroute= (req, res)=>{
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
    if(req.url =='/add-product' && req.method =='POST'){

        fs.writeFileSync('data.text', 'submitted')
        res.setHeader('Location', '/');
        return res.end();
     
    }
    if(req.url == '/'){
    res.write('<!DOCTYPE html');
    res.write('<html>')
    res.write(`
      <head><title>Shooping::Post</title></head>
      <body>
      <h2>Shooping Home</h2>
      </body>
    `) 
   return res.end()
  }
}

module.exports =pageroute;