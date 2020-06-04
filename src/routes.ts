import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Padrão de nomes das funções quando usar Controller: 
 * index (listagem),
 * show (mostrar unico registro),
 * create (criar),
 * update (atualizar),
 * delete (deletar)
 * */
 
routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;