// Search
const dummyResults = require('../../data/dummyResults.json')

module.exports = function (router) {
  router.get('/search/results', function (req, res) {

    let isCS = req.session.data.isGov

    console.log(req.session.data)

    res.render('search/results/index.html', {
      'data': dummyResults,
      'isCS': isCS
    })
  })
}
