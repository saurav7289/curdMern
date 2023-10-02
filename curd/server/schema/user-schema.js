import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name:{
        type:String,
    },    
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:Number,
    }
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', userSchema);

export default user;