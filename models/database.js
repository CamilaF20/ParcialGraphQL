import mongoose from "mongoose";

const DatabaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: Number,
  carbs: Number,
  fat: Number,
});

export default mongoose.model("Database", DatabaseSchema);
