var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Book = require('../models/Book');

var transactionSchema = new Schema({
  memberid: String,
  days: String,
  date: { type: Date, default: Date.now() },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'book' }]
});


transactionSchema.pre('save', function(next) {
  Book.find({ '_id': { $in: this.booklist }}, (err, books) => {
      let flag = true;
      for (let i = 0; i < books.length; i++) {
          if (books[i].stock == 0) {
              flag = false;
              break;
          }
      }

      if (!flag) return next(new Error('Stock Habis'));
      
      books.forEach(book => {
          book.stock--;

          book.save(err => {
              if (err) return next(new Error(err));
          });
      });

      return next();
  });        
})


var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
