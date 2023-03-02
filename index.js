const express = require('express');
const app = express();
const port = process.env.PORT || 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  console.log('deu bom');
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
