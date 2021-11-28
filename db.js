const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')
dotenv.config()

const url = process.env.URL1;

const url2 = process.env.URL2;

MongoClient.connect(url2, (err, client)=>{
    if(err) throw err;

    console.log("db connected");
    const app = require('./app');
    app.listen(8000, ()=>{
        console.log("server listening on 8000")
    })
})