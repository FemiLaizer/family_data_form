const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/storage', (req, res) => {
    res.static(200).send("Confirmed")
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})