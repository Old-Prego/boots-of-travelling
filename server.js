const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const helpers = require('./utils/helpers');
const controllers = require('./controllers');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3006;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Defines the session/cookie to use for checking if a user is logged in or not.
const sess = {
    secret: 'Speak Friend and Enter',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(controllers);

// Enables the use of helpers
const hbs = handlebars.create({ helpers });

// Defining template engine (What drives the templates in, i.e. Handlebars in this case).
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Defines what files are publicly accessible and allows the server to find and serve them.
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    sequelize.sync({ force: false });
});