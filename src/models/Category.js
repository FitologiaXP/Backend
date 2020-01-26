const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
})

module.exports = model('Category', CategorySchema);