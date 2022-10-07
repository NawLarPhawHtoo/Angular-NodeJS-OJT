import mongoose, { model, Schema } from "mongoose";

const ownerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type:Date,
      default:'',
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default model("Owner", ownerSchema);
