var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname+'./public'))
//app.use(express.static(path.normalize(appRoot + '/../client'), staticContentOptions));

/*app.get('/', function(request, response) {
  response.render('index.html')
})*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
