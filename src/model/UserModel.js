const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  senha: {type: String, required: true},
  phone: {type: String, default: false},
  cpf: {type: String, default: true},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('User', UserSchema);