const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const UserRoutes = require('./routes/UserRoutes');
server.use('/task', UserRoutes);

server.listen(3333, () => {
  console.log('API ONLINE');
});