const express = require('express');
const mongoose = require ('mongoose');


const teamRoutes = require('./routes/teams');
const indexRoutes = require('./routes/index');

//Variables
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL || '';

//Connect to the database
mongoose.connect(databaseUrl);
const database = mongoose.connection;

database.on('error', (error) => {
    console.error(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

//Create an Express app
const app = express();

//Specify data that goes to DB is in object format i.e. JSON and also app to use specified ROUTES
app.use(express.json());
app.use('/', indexRoutes);
app.use('/teams', teamRoutes);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
;});


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

