const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/new', notesCtrl.create, ensureLoggedIn)
router.get('/', notesCtrl.getAll, ensureLoggedIn)

module.exports = router;