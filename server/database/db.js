import mongoose from "mongoose";
//connecting mongodb database with application.

const Connection=async (username,password)=>{
    const URL=`mongodb://payal:codeforinterview@ac-6ss9ju7-shard-00-00.8fj1jl7.mongodb.net:27017,ac-6ss9ju7-shard-00-01.8fj1jl7.mongodb.net:27017,ac-6ss9ju7-shard-00-02.8fj1jl7.mongodb.net:27017/?ssl=true&replicaSet=atlas-saakgp-shard-0&authSource=admin&retryWrites=true&w=majority`;
try{

        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
console.log('Database connected successfully')
}catch(error){
    console.log('error while connecting with database',error);
}
}
export default Connection;