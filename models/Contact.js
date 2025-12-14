import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  userId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Contact", ContactSchema);
