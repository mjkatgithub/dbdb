const serve = require('serve');
const path = require('path');

const server = serve(path.join(__dirname,'dist'), {
  port: 80,
  ignore: ['node_modules']
})
