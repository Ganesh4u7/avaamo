const express = require('express');
const bodyparser = require("body-parser");
const path = require('path');
const cors = require('cors');

const mongo_db = require("./connections/mongo_connection");

const port = normalizePort(process.env.PORT || '3000');


let app_init = async () => {

  await mongo_db.connect();

  const routes = require("./routes"); 

    const app = express();
    app.use(cors());

    app.use(bodyparser.json());
    app.use(routes);
    app.use(express.static(path.join(__dirname, './dist/avaamo-assignment')));
        app.get('/',function(req,res){
           res.sendFile(path.join(__dirname,"./dist/avaamo-assignment/index.html"));
        // res.redirect('/login');
        });
        app.all('*', function(req, res) {
          res.redirect("/login");
        });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });

}

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }

}   

app_init();