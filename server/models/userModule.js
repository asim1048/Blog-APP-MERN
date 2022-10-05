import mongoose from 'mongoose'

const schema=new mongoose.Schema({
    token:{
        type:String
    },
    deviceId:{
        type:String
    }},
    {
        timestamps:true,
    }
);

const UserModule=mongoose.model('userModule',schema)
export default UserModule;