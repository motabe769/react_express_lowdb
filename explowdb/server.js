const express = require('express');
const app = express();
const cors = require('cors');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('masterdb.json')
const masterdb = low(adapter)
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
masterdb.defaults({ data: [] }).write();

app.get('/', function(req,res){
    var y = masterdb.get('data').value();
    res.send(y);
});

app.post('/', function(req,res){
    masterdb.get('data').push({ nama:req.body.nama, usia:req.body.usia, domisili: req.body.domisili}).write()
    console.log(req.body);
    res.send({
        type: 'POST BERHASIL',
        nama: req.body.nama,
        usia: req.body.usia,
        domisili: req.body.domisili,
    });
});

app.listen(2707, function(){
    console.log('Server @port Localhost:2707');
});
