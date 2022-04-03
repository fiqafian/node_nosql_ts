    //insert values to db
    var mongodbclient = require("mongodb").MongoClient

    var url = "mongodb://127.0.0.1:27017/"
    mongodbclient.connect(url, (error:any, db :any)=>{
        if (error) throw error
        console.log("db.connected")
    
        //create name of db
        var dbo = db.db('storage') 

        //to insert value as data
        // var obj ={ id:1, name : "kumar", class: "fswd", email: "kumar@gmail.com"}
        var obj ={ id:2, name : "fika", class : "fswd", email: "pika@gmail.com", contact : "1234"}

        //connect collection and insert value to db
        dbo.collection('user1').insertOne(obj, (error: any, res: any)=>{
            if (error) throw error
            console.log(res)  //db as respond
        })
    })