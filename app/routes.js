const express = require('express')
const router = express.Router()
require('./routes/internal-jobs/routes')(router)
require('./routes/search/routes')(router)
require('./routes/account/routes')(router)
require('./routes/test/routes')(router)

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

module.exports = router
