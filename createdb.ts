var mongodbclient = require("mongodb").MongoClient

var url = "mongodb://127.0.0.1:27017/"
mongodbclient.connect(url, (error:any, db :any)=>{
    if (error) throw error
    console.log("db.connected")

    //create name of db
    var dbo = db.db('storage') 

    //to create collection + callback  -error, db
    dbo.createCollection('user1',(error:any, db :any)=>{ //'user 1'
    if(error) throw error
    console.log("create collection")
    db.close 
    //to run - npx ts-node filename.ts (--if typescript)
    })


})