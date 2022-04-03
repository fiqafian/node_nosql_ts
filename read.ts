var mongodbclient = require("mongodb").MongoClient

var url = "mongodb://127.0.0.1:27017/"
mongodbclient.connect(url, (error:any, db :any)=>{
    if (error) throw error
    console.log("db.connected")

    //create name of db
    var dbo = db.db('storage') 

    //to read file
    dbo.collection('user1').findOne({}, (error:any,res:any)=>{
        if (error)throw error
        console.log(res)
        db.close()
    })
})