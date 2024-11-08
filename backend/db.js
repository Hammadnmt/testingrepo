
const mongoose = require('mongoose');

const connection=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connection successfully")
    } catch (error) {
        console.log(error)
    }

}


module.exports = connection;
