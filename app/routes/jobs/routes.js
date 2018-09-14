const dummyResults = require('../../data/dummyResults.json')

module.exports = function (router) {
  router.get('/job/:id', function (req, res) {
    let sessionData = false

    if (req.session.data) {
      sessionData = req.session.data
    }

    const singleJob = () => {
      let j
      dummyResults.vacancies.content.forEach((job) => {
        if (job.id.toString() === req.params.id) {
          j = job
        }
      })
      return j
    }
    res.render('jobs/details.html', {
      'data': singleJob(),
      'sessionData': sessionData
    })
  })
}
