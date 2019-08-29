const express = require('express');

const DislikeController = require('./controller/DislikeController');
const LikeController = require('./controller/LikeController');
const DesenvolvedorController = require('./controller/DesenvolvedorController');

const routes = express.Router();
//Listagem de desenvolvedores para exibir os cards na grid
routes.get('/devs/consultar', DesenvolvedorController.consultar);
//Cadastro de desenvolvedores
routes.post('/devs', DesenvolvedorController.store);
//Registrando like
routes.post('/devs/:idDesenvolvedor/likes', LikeController.store);
//Registrando dislike
routes.post('/devs/:idDesenvolvedor/dislikes', DislikeController.store);

module.exports = routes;