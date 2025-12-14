import mongoose from "mongoose";

const PipelineSchema = new mongoose.Schema({
  name: String,
  stages: [String],
  userId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Pipeline", PipelineSchema);
