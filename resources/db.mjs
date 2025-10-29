import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://jairoarmando:FvpyKzzDs4anFwMZ@cluster0.n99bjxu.mongodb.net/?retryWrites=true&w=majority";

export const conectarBaseDeDatos = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("onectado exitosamente a MongoDB Atlas");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
};
