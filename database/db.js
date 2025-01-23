const mongoose = require("mongoose");

const connectDB = async () => {
        try{
                await mongoose.connect(" mongodb://localhost:27017/bookstore");
                // await mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
                console.log('DB connected succesfully..');                
        }catch(err){
                console.error('Mongo DB connection Failed..',err);
                process.exit(1);
        }
};

module.exports = connectDB;