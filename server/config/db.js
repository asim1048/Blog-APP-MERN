import mongoose from "mongoose";


const URL='mongodb://user:1234@ac-vrjv6th-shard-00-00.v6prxp6.mongodb.net:27017,ac-vrjv6th-shard-00-01.v6prxp6.mongodb.net:27017,ac-vrjv6th-shard-00-02.v6prxp6.mongodb.net:27017/?ssl=true&replicaSet=atlas-fhci3n-shard-0&authSource=admin&retryWrites=true&w=majority'
const connectDB = async () => {
  const res = await mongoose.connect(
    URL,{useUnifiedTopology:'true'}
  );
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectDB;
