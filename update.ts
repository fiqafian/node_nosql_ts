var mongodbclient = require("mongodb").MongoClient

var url = "mongodb://127.0.0.1:27017/"
mongodbclient.connect(url, (error:any, db :any)=>{
    if (error) throw error
    console.log("db.connected")

    //create name of db
    var dbo = db.db('storage') 

    // new --mention what's you want to update - detail person no.2
    var query = {id:2} //can refer as contact
    var obj3 ={$set:{contact:"9922"}}

    //to read file (update the element) -updateOne (query, obj3)
    dbo.collection('user1').updateOne(query,obj3, (error:any,res:any)=>{
        if (error)throw error
        console.log("value updated")
        db.close()
    })
})