const fs = require('fs');
const path = require('path');

const dataController = []

dataController.getData = (req, res ,next) =>  {
    console.log('getting data')
    const results = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/bootcamps.json'),'UTF-8'))
    console.log(results)
    if (!results) {
        return next({
          log: 'fileController.getCharacters: ERROR: Error getting characters data from characters.json file',
          message: { err: 'Error occurred in fileController.getCharacters. Check server logs for more details.' },
        });
      }
    res.locals.data = results
    return next()
}

module.exports = dataController;