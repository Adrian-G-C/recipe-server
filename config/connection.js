import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || process.env.DB_DEV_URI,
    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;