var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var path = __dirname + '/views/';

//ajout du middleware body-parser
app.use(bodyParser.json());    

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "login.html");
     
});



app.use(express.static(path));
app.use("/", router);

app.listen(8081, function () {
  console.log(' app listening on port 8081!')


  var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("GET","https://insdatadev-gevxguoisq-ew.a.run.app/login?env=dev&country=sen&local=0",true);
    console.log('OPENED: ', xhr.status);
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log(this.responseText)
      }
    });
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Accept","application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-Type", "multipart/form-data");

    xhr.send();  
})


/* var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST","/login?env=dev&country=sen&local=0",true);
    console.log('OPENED: ', xhr.status);
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        //console.log(this.responseText)
      }
    });
    xhr.setRequestHeader("Content-type","application/json");
    xhr.setRequestHeader("Accept","application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-Type", "multipart/form-data");

    xhr.send();   */