var http = require('http')
    ,app = require('./config/express');

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
    
http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

