import mongoose from "mongoose";

const DatabaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  isVegetarian: { type: Boolean, default: false },
  value: { type: Number, default: 0 },
  coments: { type: Number, default: 0 },
});

export default mongoose.model("Database", DatabaseSchema);
