const express = require('express')

const app = express()

app.get('/user', (req, res) => {
  res.send({
    name: 'neo',
    age: 18,
  })
})

app.get('/web', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(3000, () => console.log('http://127.0.0.1:3000'))
