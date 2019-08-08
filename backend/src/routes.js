const express = require('express');

const LikeController = require('./controller/LikeController');
const DesenvolvedorController = require('./controller/DesenvolvedorController');

const routes = express.Router();

routes.post('/devs', DesenvolvedorController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;