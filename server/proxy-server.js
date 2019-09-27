const nr = require('newrelic');
const express = require('express');
const request = require('request');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use('/loaderio-cc692639d4e1ff69455098872e1588a9', (req, res, next) => {
  res.send('loaderio-cc692639d4e1ff69455098872e1588a9')
})

app.use('/:id/', express.static('public'));

app.get('/api/:id/reservations', (req, res) => {
  console.log(req.params)
  request.get(`http://localhost:3002/api/${req.params.id}/reservations/`, function (error, response, body){
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    // res.end()
    res.send(body)
  })
})


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
