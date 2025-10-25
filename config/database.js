import mongoose from "mongoose";

export const database = async () => {
    try {
       console.log("Koneksi ke database...");
       
       const response = await mongoose.connect("mongodb://127.0.0.1:27017/Meiii?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8");

       console.log("Koneksi ke database berhasil")
       
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};