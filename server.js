
require('dotenv').config();
const express = require("express");
const connectDB = require('./database/db');
const routes = require('./routes/book-routes');

const app = express();

const PORT = 3000;//process.env.PORT || 3001;

connectDB(); //invoking DB connection

app.use(express.json()); //express middleware

//routes here
app.use('/api/Book',routes);

app.listen(PORT,() => {
        console.log(`Server listening on port ${PORT}`);
        
})
