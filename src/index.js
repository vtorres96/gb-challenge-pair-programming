const express = require('express');

const consolidationRouter = require('./routes/consolidation');

const app = express();

app.use(express.json());
app.use('/consolidations', consolidationRouter);

app.listen(3333, () => {
  console.log('Server running on port http://localhost:3333')
});