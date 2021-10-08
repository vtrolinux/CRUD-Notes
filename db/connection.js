const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/NotesDB'

let _DB
// instanciação de conexão
const initDB = cb => { 
    MongoClient.connect(url, {useUnifiedTopology: true})
    .then(client => {
        _DB = client;
        cb(null, _DB);
    })
    .catch(err => {
        cb(err);
    });
}

const getDB = () => {
    return _DB;
}
  
module.exports = {
    initDB,
    getDB
}