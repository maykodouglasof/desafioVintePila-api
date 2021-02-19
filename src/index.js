const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const UserRoutes = require('./routes/UserRoutes');
const SessionRoutes = require('./routes/SessionRoutes');
server.use('/user', UserRoutes);
server.use('/session', SessionRoutes);

server.listen(3333, () => {
  console.log('API ONLINE');
});