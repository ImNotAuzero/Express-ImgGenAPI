/* jshint esversion: 9 */

const Express = require('express');
const router = Express.Router();
const generators = require('../generators/generators');


/**
 * DEFAULT ROUTE
 * POST AND GET METHODS
 */
router.post('/', async (req, res) => {
  res.status(200).send('Default route works');
});

router.get('/', async (req, res) => {
  res.status(200).send('Default route works');
});

/**
 * ALL METHODS FOR IMAGE GENERATION IS POST
 */

router.post('/worsethanhitler', async (req, res) => {
  generators.WorseThanHitler(req, res)
    .then((a) => res.status(200).send(a))
    .catch((e) => {
      switch(e) {
        case 'InvalidBody':
          return res.status(422).send('InvalidBody');
        default:
          return res.status(500).send(e);
      }
    });
});

router.post('/surprisedscarlett', async (req, res) => {
  generators.SurprisedScarlett(req, res)
  .then((a) => res.status(200).send(a))
  .catch((e) => {
    switch(e) {
      case 'InvalidBody':
        return res.status(422).send('InvalidBody');
      default:
        return res.status(500).send(e);
    }
  });
});


module.exports = router;