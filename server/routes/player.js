const express = require('express');
const controller = require('../controllers/player');
const auth = require('../middleware/auth');
const router = express.Router();

router.get("/current", auth, controller.getUsers);
router.get("/", controller.getAudioTop);
router.get("/:artistName", controller.searchArtist);

router.post("/", controller.registrateUser);
router.post("/authorization", controller.authorization);

module.exports = router;