const express = require('express');
const cors = require('cors');

const controller = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());


app.post('/users', controller.register);
app.get('/users/:id', controller.getUserById);
app.delete('/users/:id', controller.deleteUser);


app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
});