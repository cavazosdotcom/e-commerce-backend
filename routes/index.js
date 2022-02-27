// importing express and api folder routes, user express Router function
const router = require('express').Router();
const apiRoutes = require('./api');

// express router uses the api routes 
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;