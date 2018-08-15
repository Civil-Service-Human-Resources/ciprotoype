// Internaljobs


module.exports = function(router) {

  router.get('/internal-jobs/', function (req, res) {

res.render('layoutBuilder.html',{



  'h1': 'Access internal jobs',
        'form': {
          'inputs': [
            {
                'type': 'html',
                'html': '<p class="govuk-body-l">Civil servants can view and apply for internal jobs by providing their work email address. An email will be sent to your work email address.</p><p class="govuk-body">If you cannot access your work email address, you can provide the email address of your line manager to allow access on your behalf.</p>'
              },
        {
          'type': 'text',
          'name': 'workEmail',
          'id': 'workEmail',
          'label': 'Enter your work email address',
          'errorText': 'You must enter a valid email address'
        }
        ],
 'backTo': '',
 'buttonText' : 'Send activation link',
 'buttonUrl' : '/internal-jobs/activate'
}

}
    )
  }
)


router.get('/internal-jobs/activate', function(req, res) {

  res.render('layoutBuilder.html', {
    'layout': '2-0',
    'h1': 'Check your email',
    'form': {
      'inputs': [
        {
          'type' : 'html',
          'html' : '<p class="govuk-body-l">Verify your work email address by following the instructions sent to myworkaddress@governmentaddress.gov.uk</p>'},



       {
          'type': 'details',
          'summary': 'I haven\'t received my verification email',
          'text': '<p class="govuk-body">It may take a few minutes for the email to arrive. Please check your email spam or junk mail folder. If you still haven\t received your email after a short while, you can  <a href="#">re-send activation link</a>.'
        },

      ],

      'buttonText': 'Search for a job',
      'buttonUrl': '../search/results/index-signedin'
    }

  })
})






  }
