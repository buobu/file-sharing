require('dotenv').config();

const mongoose = require('mongoose');

function connectDB() {
    // Database connection 
    mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(() => {
        console.log('Database is working successfully');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;