const router = require('express').Router()
const controllers = require('./controllers.js');


router.route('/reviews')
  .get(controllers.get)
router.route('/writereview')
  .post(controllers.post)

router.route('/yes/:id')
  .put(controllers.yes);

router.route('/no/:id')
  .put(controllers.no);

module.exports = router