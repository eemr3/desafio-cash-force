require('express-async-errors');
require('dotenv').config();
const { handleErrors } = require('../middlewares/handle-errors');

const { app } = require('./api');

const port = process.env.API_PORT || 3333;

app.get('/', (req, res) => res.send('Hello World!'));

app.use(handleErrors);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
