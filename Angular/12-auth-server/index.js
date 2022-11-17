const express = require('express');
const cors = require('cors');
const { dbConnectionStr } = require('./db/config');
require('dotenv').config();

//Create server
const app = express();

//DB connection
dbConnectionStr();

//Public folder
app.use ( express.static('public') );

//CORS
app.use( cors() );

//Body parse
app.use( express.json() );

//Routes
app.use('/api/v1/auth/', require('./routes/auth'));

app.listen( process.env.PORT, () => {
  console.log(`Server running on port ${ process.env.PORT }`);
});