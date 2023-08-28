let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'fight crime'}]
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    //To render a view on the '/todo/ url request
    app.get('/todo', function(req, res) {
        res.render('todo', {data: data});
    })


    //for adding a new todo item, we need a post request
    app.post('/todo', urlencodedParser, function(req, res) {
        console.log(req.body)
        console.log('post')
        data.push(req.body);
        res.render('todo', {data: data});
    })

    //Handle delete request when the user wants to delete a todo.
    //Delete is also an http verb or method just like post or get
    app.delete('/todo/:item', function(req, res) {
        console.log('delete req');
        data = data.filter(todo => {
            return todo.item.trim().replace(/ /g, '-') !== req.params.item;
        });
        res.render('todo', {data: data});
    })
}
