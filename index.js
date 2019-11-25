const express = require('express');
const path = require('path');

const app = express();

//placeholder users array
const users = [
    {
        id: 1,
        name: 'Neekeri',
        email: 'nek@nigg.ro',
    },
    {
        id: 2,
        name: 'Homo',
        email: 'homo@ho.mo',
    },
    {
        id: 3,
        name: 'kys',
        email: 'kys@kys.kys',
    }
];

const logger = (req, res, next) => {
    console.log(`Request logged at ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware
app.use(logger);

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));