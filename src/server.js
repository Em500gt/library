const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const router = require('./routes/index.js');
const sequelize = require('./config/db.js');

app.use(express.json());

app.use('/app', router);

app.listen(PORT, () => {
    console.log(`Connecting from: http://localhost:${PORT}`);
})

sequelize
    .authenticate()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log(err.message));

