const mongoose = require("mongoose")

const database = async() => {
    try {
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log("Database connected...")).catch((err)=>{console.log(err)})
    } catch (error) {
        console.log(error);
    }
}

module.exports = database