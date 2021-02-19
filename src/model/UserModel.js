const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  phone: {type: String, default: false},
  cpf: {type: String, default: true},
});

module.exports = mongoose.model('User', UserSchema);