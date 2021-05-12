const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to my homepage')
  } 
  if(req.url === '/about') {
    res.end('here is out short history')
  }
  res.end(`
  <h1>Oops!</h1>`)
})

server.listen(5000)