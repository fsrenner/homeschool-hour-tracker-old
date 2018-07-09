const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const model = require('./model');
const config = require('./config');

const app = express();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.set('views', './public/views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/user/:user', (req, res) => {
    const user = req.params.user;
    console.log(user + ' is trying to access the system.');
    if (user !== config.systemUser) {
        res.render('error');
    } else {
        model.getChildHours(req, res);
    }
});

app.get('/user/update/:name', (req, res) => {
    const name = req.params.name;
    const hours = [
        req.query.reading,
        req.query.language,
        req.query.math,
        req.query.history,
        req.query.science,
        req.query.art,
        req.query.music,
        req.query.bible,
        req.query.pe,
        req.query.life,
        req.query.core,
        req.query.noncore,
        req.query.total,
        name
    ];
    console.log('Updating child: ' + name + ' with params: ' + hours.toString());
    model.updateChildHours(req, res, hours, name);
});

app.listen(PORT, HOST, (err) => {
   if (err) {
       throw new Error();
   } else {
       console.log('Homeschool Tracker app is listening at: '
            + HOST + ':' + PORT);
    }
});