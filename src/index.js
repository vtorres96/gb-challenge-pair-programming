require('./config/env');

const express = require('express');

const consolidationRouter = require('./routes/consolidation');

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.get('/test', (req, res) => {
    res.send('Hello World!');
});
app.use('/consolidations', consolidationRouter);

app.listen(port, (error) => {
    if (error) {
        console.error(`Failed to start server on port ${port}: ${error.message}`);
        process.exit(1);
    }

    console.log(`Server running on port http://localhost:${port}`);
});
