// Search


module.exports = function(router) {

  router.get('/account/sign-in', function(req, res) {
    var emailAddress = req.session.data['accountEmail']
    res.render('layoutBuilder.html', {
      'layout': '2-0',
    //  'partial': 'account/createAccountAdvice',
      'h1': 'Sign in to your account',
      'captionXL': 'Sign in to apply for jobs and view and manage your job applications',

      'form': {
        'action': '../search',
        'inputs': [{
            'type': 'html',
            'html': '<p class="govuk-body">Sign in or <a class="govuk-link" href="create-account-1">create an account</a> to get started.</p>'
          },
          {
            'type': 'text',
            'name': 'accountEmail',
            'id': 'accountEmail',
            'label': 'Email address',
            'errorText': 'You must enter a valid email address',
            'width': '20'
          },
          {
            'type': 'password',

            'name': 'accountPassword',
            'id': 'accountPassword',
            'label': 'Password',
            'errorText': 'Please enter a valid password',
            'width': '20'
          },
          {
          'type' : 'hidden',
          'id' : 'hasSignedIn',
          'name' : 'hasSignedIn',
          'value' : true
},
          {
            'type': 'html',
            'html': '<p class="govuk-body"><a class="govuk-link" href="recover-account">I can\'t acccess my account</a></p>'
          }


        ],

        'buttonText': 'Sign in',
        'buttonUrl': '../search'
      }

    })
  })




  router.get('/account/create-account-1', function(req, res) {
    res.render('layoutBuilder.html', {


      'layout': '2-0',
      'h1': 'Create an account',
      'form': {
        'inputs': [


          {
            'type': 'text',
            'name': 'caName',
            'id': 'caName',
            'label': 'Full name',
            'errorText': 'You must enter a name',
            'width': '20'
          },


          {
            'type': 'text',
            'name': 'accountEmail',
            'id': 'accountEmail',
            'label': 'Email address',
            'hint': 'If you are a civil servant and you would like to view and apply for internal jobs, we recommend you create an account with your work email address',
            'errorText': 'You must enter a valid email address',
            'width': '20'
          },
          {
            'type': 'password',
            'name': 'accountPassword',
            'hint': 'Your password must be at least eight characters including at least one uppercase letter, one special character and one number',
            'id': 'accountPassword',
            'label': 'Password',
            'errorText': 'Please enter a valid password',
            'width': '20'
          },
          {
            'type': 'password',

            'name': 'accountPassword',
            'id': 'accountPassword',
            'label': 'Repeat password',
            'errorText': 'Please enter a valid password',
            'width': '20'
          }


        ],

        'buttonText': 'Create account',
        'buttonUrl': './create-account-2'
      }

    })
  })

  router.get('/account/create-account-2', function(req, res) {

    res.render('layoutBuilder.html', {
      'layout': '2-0',
      'h1': 'Check your email',




      'form': {
        'inputs': [
          {
            'type' : 'html',
            'html' : '<p class="govuk-body-l">Activate your account by following the instructions sent to the email address: itsme@myorganisation.co.uk</p>'},



         {
            'type': 'details',
            'summary': 'I haven\'t received my activation email',
            'text': '<p class="govuk-body">It may take a few minutes for the email to arrive. Please check your email spam  or junk mail folder. If you still haven\t received your email after a short while, you can  <a href="#">re-send activation link</a>.'
          },

        ],

        'buttonText': 'Search for a job',
        'buttonUrl': '../search/results/index-signedin'
      }

    })
  })

  router.get('/account/activation-code', function(req, res) {

    res.render('layoutBuilder.html', {
      'layout': '2-0',
      'h1': 'Activate your account',




      'form': {
        'inputs': [
          {
            'type' : 'html',
            'html' : '<p class="govuk-body-l">A 6 digit activation code has been sent to your email address itsme@myorganisation.co.uk</p>'
          },

            {
              'type': 'text',
              'name': 'activationCode',
              'id': 'accountEmail',
              'label': 'Activation code',
              'errorText': 'Invalid activation code',
              'width': '20'
            },




         {
            'type': 'details',
            'summary': 'I haven\'t received my activation email',
            'text': '<p class="govuk-body">It may take a few minutes for the email to arrive. Please check your email spam  or junk mail folder. If you still haven\t received your email after a short while, you can  <a href="#">re-send activation link</a>.'
          },

        ],

        'buttonText': 'Activate account',
        'buttonUrl': '../search/results/index-signedin'
      }

    })
  })




}
