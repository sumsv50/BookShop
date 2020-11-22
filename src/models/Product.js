const mogoose = require('mongoose');
const Schema = mogoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  type: String,
  name: String,
  price: String,
  img: String,
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
});

module.exports = mogoose.model('Product', Product);