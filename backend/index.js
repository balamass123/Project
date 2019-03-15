const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
// ........

// Require Notes routes
//require('./app/routes/note.routes.js')(app);
require('./app/routes/routes.js')(app);
// ........
app.post('/signin',(req,res)=>{
em=req.email;
ps=req.password;
console.log(em,ps);
csign='';
login={email:req.body.email};
pass='';
db.collection("users").find().toArray(function(err,result){
    if(result.length!==0)
    {
        if(result[0].pass==ps)
        {
            csign='ok';
            app.get('',(req,res)=>res.send(csign));
            app.get('',(req,res=>res.send()));
        }
        else{
            csign='invalid';
            app.get('',(req,res)=>res.send(csign));
        }
    }
});
});
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});