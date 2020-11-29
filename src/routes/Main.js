/* jshint esversion: 9 */

const Express = require('express');
const router = Express.Router();

router.get('/', async (req, res) => {
  res.status(200).send('Completed request');
});

module.exports = router;