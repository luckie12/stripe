const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const MessageSchema = new Schema({
//   text: {
//     type: String,
//     required: true
//   },
//   read: {
//     type: Boolean,
//     default: false
//   }
// });
const MessageSchema = new Schema({
  items: Array,
  price: String
})
const Model = mongoose.model('Message', MessageSchema);

module.exports = Model;