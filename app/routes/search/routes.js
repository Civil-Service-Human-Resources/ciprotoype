const dummyResults = require('../../data/dummyResults.json')

module.exports = function (router) {
  router.get('/search', function (req, res) {
    let sessionData = false

    if (req.session.data) {
      sessionData = req.session.data
      console.log(req.session.data)
    }

    if (req.query.accountPassword) {
      sessionData = req.session.data = {
        caName: req.query.accountEmail,
        accountEmail: req.query.accountEmail,
        accountPassword: req.query.accountPassword,
        isGov: !!req.query.accountEmail.includes('gov.uk')
      }

      req.session.save(() => {
        console.log(sessionData)
      })
    }

    res.render('search/index.html', {
      'sessionData': sessionData,
      'h1': 'Job search',
      'captionXL': 'Search and apply for jobs within the Civil Service and central government organisations',
      'form': {
        'action': '../search/results',
        'inputs': [
          {
            'type': 'text',
            'name': 'keyword',
            'id': 'keyword',
            'label': 'Keyword (optional)',
            'hint': 'Enter a job title or skill',
            'width': '20'
          },
          {
            'type': 'text',
            'name': 'location',
            'id': 'location',
            'label': 'Location (optional)',
            'width': '20'
          }
        ],

        'buttonText': 'Search',
        'buttonUrl': '../search/results'
      }

    }

    )
  })

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
      messaging = "You've successfully verified your Civil Service work email address"
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
