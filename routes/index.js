let express = require('express');
let router = express.Router();

const index_controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', index_controller.index);

module.exports = router;
