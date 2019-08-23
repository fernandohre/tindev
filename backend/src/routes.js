const express = require('express');

const DislikeController = require('./controller/DislikeController');
const LikeController = require('./controller/LikeController');
const DesenvolvedorController = require('./controller/DesenvolvedorController');

const routes = express.Router();

routes.get('/devs/consultar', DesenvolvedorController.consultar);

routes.post('/devs', DesenvolvedorController.store);

routes.post('/devs/:idDesenvolvedor/likes', LikeController.store);

routes.post('/devs/:idDesenvolvedor/dislikes', DislikeController.store);

module.exports = routes;