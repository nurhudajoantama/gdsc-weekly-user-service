const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const controller = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());


app.post('', controller.register);
app.get('/:id', controller.getUserById);
app.delete('/:id', controller.deleteUser);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});