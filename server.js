const { createServer } = require('http')
const { parse } = require('url')

const server = createServer((req, res) => {
  res.end('Hello World!')
})

server.listen(8000, () => {
  console.log('Listening on port 8000')
})