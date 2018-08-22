// Search
module.exports = function (router) {
  router.get('/search', function (req, res) {
    let emailAddress = req.session.data['accountEmail']
    let isCS = 'no'
    if (typeof emailAddress !== 'undefined') {
      isCS = emailAddress.includes('gov')
    }

    res.render('layoutBuilder.html', {

      'h1': 'Job search',
      'captionXL': 'Search and apply for jobs within the Civil Service and central government organisations',
      'email': emailAddress,
      'cs': isCS,
      'form': {
        'action': '../search/results',
        'inputs': [
          {
            'type': 'text',
            'name': 'keyword',
            'id': 'keyword',
            'label': 'Keyword (optional)',
            'hint': 'Enter a job title or skill',
            'errorText': 'You must enter a valid email address',
            'width': '20'
          },
          {
            'type': 'text',
            'name': 'location',
            'id': 'location',
            'label': 'Location (optional)',
            'errorText': 'You must enter a valid email address',
            'width': '20'
          }

        ],

        'buttonText': 'Search',
        'buttonUrl': '../search/results'
      }

    }

    )
  })

}
