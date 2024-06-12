// server.js
const express = require('express');
const mongoose = require('./src/infrastructure/database/mongoose');
const userController = require('./src/presentation/controllers/UserController');
const healthController = require('./src/presentation/controllers/HealthController');

const app = express();
app.use(express.json());
app.use('/api', userController);

app.use('/', healthController);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
