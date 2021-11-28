const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const url2 = 'mongodb+srv://gamma-prep:gamma-prep@cluster0.v16xs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(url2, (err, client)=>{
    if(err) throw err;

    console.log("db connected");
    const app = require('./app');
    app.listen(8000, ()=>{
        console.log("server listening on 8000")
    })
})