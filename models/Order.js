import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 150,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0, //when we create a new order, the initial state will be zero
    },
    method: {
      type: Number,
      required:true
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);