const express = require('express');
const router = express.Router();

// router.get('/', UserController.index);
// router.post('/', UserController.create);

router.get('/list', ListController.index);
// router.post('/', ListController.create);

module.exports = router;