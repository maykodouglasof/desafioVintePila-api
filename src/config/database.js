const mongoose = require('mongoose');

const url = 'mongodb+srv://mayko:mayko@desafio.ztgbn.mongodb.net/desafiovintepila?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;