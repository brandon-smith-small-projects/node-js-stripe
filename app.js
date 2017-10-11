const express = require('express');
const stripe = require('stripe')('sk_test_oJt2TBQal6PG9QCMQTNFBSjY');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();


// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebrs');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

//Index route
app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})