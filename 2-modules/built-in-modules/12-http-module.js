// just a brief thing
const http = require('http')

const server = http.createServer((req, res) => { // req : incoming request | res : what we're sending back
    if (req.url === '/') {
        // or do res.write('stuff') and then res.end()
        return res.end('Welcome to our homepage')
    } 
    if (req.url === '/about') {
        return res.end('Welcome to our about page')
    }
    res.end(` 
        <h1>Error 404</h1>
        <p>Seems like that page doesn't exist</p>
        <a href='/'>Back home</a>
    `) // This is a default response
    
})

server.listen(5000) //localhost:5000