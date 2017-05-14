let express = require('express');
let router = express.Router();

const index_controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', index_controller.angular);

/* GET vue version home page. */
router.get('/vue', index_controller.vue);


module.exports = router;
