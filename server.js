var http = require('http')
    ,app = require('./config/express');

var port_number = server.listen(process.env.PORT || 3000, LOCAL_ADDRESS='0.0.0.0');
app.listen(port_number);

const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
server.listen(PORT, LOCAL_ADDRESS, () => {
  const address = server.address();
  console.log('server listening at', address);
});
    
http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

