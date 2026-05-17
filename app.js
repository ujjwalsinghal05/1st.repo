const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('DevOps Project automate by CI/CD pipelines');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
