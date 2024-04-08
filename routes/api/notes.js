const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/notes', notesCtrl.create, ensureLoggedIn)

module.exports = router;