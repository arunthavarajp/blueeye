const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from BlueEye App!'));
app.listen(3000, () => console.log('App running on port 3000'));
