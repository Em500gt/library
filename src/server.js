const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const router = require('./routes/index.js');
const sequelize = require('./config/db.js');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swaggerSpec.js'); 

app.use(express.json());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Некорректные данные в теле запроса' });
    }
    next(err);
});

app.use('/app', router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Connecting from: http://localhost:${PORT}`);
})

sequelize
    .authenticate()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log(err.message));

