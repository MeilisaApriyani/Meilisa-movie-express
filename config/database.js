import mongoose from "mongoose";

export const database = async () => {
    try {
       console.log("Koneksi ke database...");
       
       const response = await mongoose.connect("mongodb://127.0.0.1:27017/Meilisa?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8");

      console.log(`Koneksi ke mongodb berhasil host: ${response.connection.host}`)

    } catch (error) {
        console.error("Gagal koneksi dengan mongodb");
        process.exit(1)
    }
}

export default database