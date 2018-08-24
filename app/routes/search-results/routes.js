// Search
const dummyResults = require('../../data/dummyResults.json')

module.exports = function (router) {
  router.get('/search/results', function (req, res) {
    let sessionData = false
    let messaging = false

    if (req.session.data) {
      sessionData = req.session.data
      console.log(req.session.data)
    }

    if (req.query.accountStatus) {
      messaging = "You've successfully activated your account"
    }

    if (req.query.isCS) {
      messaging = "You've successfully varified your Civil Service work email address"
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
      'sessionData': sessionData,
      'messaging': messaging
    })
  })
}
