const express = require('express');
const router = express.Router();

const game_controller = require('../controllers/game.controller');

router.get('/test',game_controller.test);

module.exports = router;