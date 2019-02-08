const {server} = require('./api /server.js');
const port = 3300;

server.listen(port,() => {
  console.log(`Server is listenening on port ${port}`);
});