const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [{ name: String, price: Number, qty: Number }],
  totalAmount: Number,
  status: { type: String, default: "Pending" }, // Pending, Preparing, Delivered
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
