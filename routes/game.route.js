const express = require('express');
const router = express.Router();

const game_controller = require('../controllers/game.controller');

router.get('/all',game_controller.games_all);
router.post('/create', game_controller.game_create);
router.get('/:id', game_controller.game_details);
router.put('/:id/update', game_controller.game_update);
router.delete('/:id/delete', game_controller.game_remove);

module.exports = router;