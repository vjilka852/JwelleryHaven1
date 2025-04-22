
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  amount: { type: Number, required: true },
  status: { type: String, required: true, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  transactionId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
