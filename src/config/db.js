import mongoose from "mongoose";
  
(async () => {
    try{
    await mongoose.connect(process.env.MONGODB);
    console.log("connect with DB");
    } ca
})();
