const express = require("express");
const app = express();

var cors = require('cors');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(cors());
// Routes 
app.use(require('./routes/personal'));

// Server Start
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});