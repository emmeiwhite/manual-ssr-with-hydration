const { readFileSync } = require('fs')
const { createServer } = require('http')
const { parse } = require('url')

const htmlTemplate = readFileSync(`${__dirname}/index.html`)

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname

  if (pathName === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(htmlTemplate)
  } else if (pathName === '/about') {
    res.end('About Me')
  } else {
    res.end('The URL cannot be found')
  }
})

server.listen(8000, () => {
  console.log('Listening on port 8000')
})
