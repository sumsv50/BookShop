const mogoose = require('mongoose');
const Schema = mogoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
  type: String,
  name: String,
  price: String,
  img: String,
  slug: String,
  author:String,
  detail: Object,
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
});
// Model name => collection
module.exports = mogoose.model('Product', Product);