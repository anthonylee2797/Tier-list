const express = require('express');
const app = express();
const path = require('path');

const dataController = require('./controllers/dataRouter')


app.use('/', express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
//   });

app.get('/getData', dataController.getData, (req,res) => {
  console.log(res.locals.data)
  console.log('working')
  return res.status(200).json({
    storage: res.locals.data
  })
})


app.listen(3000);