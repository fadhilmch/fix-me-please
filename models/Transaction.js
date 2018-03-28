var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: String,
  days: String,
  date: { type: Date, default: Date.now() },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'book' }]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
