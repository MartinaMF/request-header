var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var useragent = require('express-useragent')
app.use(bodyParser.json());
app.use(useragent.express());

//serving a get request
app.get('/',function(req,res){
   var ip = req.ip;
   var languages = req.acceptsLanguages();
   var software = "Browser" +" "+req.useragent.browser +","+ "os"+ " " +req.useragent.os;
  res.json({'ip adress is :' : ip, 'languages':languages[0],'software':software});
});
app.listen(3000);
console.log('Running on port 3000...')
