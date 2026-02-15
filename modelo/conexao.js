const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/livraria';

mongoose.connect(uri);

mongoose.connection.on('connected', () => {
  console.log('MongoDB conectado em', uri);
});

mongoose.connection.on('error', (err) => {
  console.error('Erro na conexão com MongoDB:', err.message);
});

module.exports = mongoose;
