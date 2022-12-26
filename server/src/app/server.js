require('dotenv').config();
const { app } = require('./api');

const port = process.env.API_PORT || 3333;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
