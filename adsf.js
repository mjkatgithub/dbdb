const serve = require('serve');
const path = require('path');

var Port = normalizePort(process.env.PORT || '1337');

const server = serve(path.join(__dirname,'dist'), {
  port: Port,
  ignore: ['node_modules']
})

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    //named pipe
    return val;
  }

  if (port >= 0) {
    //port number
    return port;
  }

  return false;
}
