// Search
const dummyResults = require('../../data/dummyResults.json')

module.exports = function (router) {
  router.get('/search/results', function (req, res) {
    let sessionData = false

    if (req.session.data) {
      sessionData = req.session.data
      console.log(req.session.data)
    }

    let correctResults = () => {
      let result = []
      dummyResults.vacancies.content.forEach((job) => {
        if (job.internal) {
          if (req.session.data) {
            if (req.session.data.isGov) {
              result.push(job)
            }
          }
        } else {
          result.push(job)
        }
      })
      return result
    }

    res.render('search/results/index.html', {
      'data': correctResults(),
      'sessionData': sessionData
    })
  })
}
