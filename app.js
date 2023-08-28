const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

//set up template engine
app.set('view engine', 'ejs');

app.use(express.static('./public'));
//By not specifying a route with app.use, we are essentially
//configuring it to be used with all routes.
//but the url in the request has to match the file path.
//for example, the request is something like: localthost:3000/styles.css
//the middleware is still gonna run but it wont do anything because the styles.css
//is inside the assets directory.

//Fire controllers
todoController(app);

//listen to port

app.listen(3000);
console.log('Listening to port 3000');

//NOTE: This project uses an mvp architecture
