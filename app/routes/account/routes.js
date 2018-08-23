// Search

module.exports = function (router) {
  router.get('/account/sign-in', function (req, res) {
    res.render('layoutBuilder.html', {
      'layout': '2-0',
    //  'partial': 'account/createAccountAdvice',
      'h1': 'Sign in to your account',
      'captionXL': 'Sign in to apply for jobs and view and manage your job applications',

      'form': {
        'action': '../search',
        'inputs': [{
          'type': 'html',
          'html': '<p class="govuk-body">Sign in or <a class="govuk-link" href="create-account">create an account</a> to get started.</p>'

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
          'type': 'hidden',
          'id': 'hasSignedIn',
          'name': 'hasSignedIn',
          'value': true
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

  router.get('/account/create-account', function (req, res) {
    res.render('layoutBuilder.html', {

      'layout': '2-0',
      'h1': 'Create an account',
      'form': {
        'action': 'activation-code',
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

        'buttonText': 'Create account'
      }

    })
  })

  router.get('/account/activation-code', function (req, res) {
    req.session.data = {
      caName: req.query.caName,
      accountEmail: req.query.accountEmail,
      accountPassword: req.query.accountPassword,
      isGov: false
    }

    if (req.query.accountEmail.includes('.gov')) {
      req.session.data.isGov = true
    }

    req.session.save(() => {
      console.log(req.session.data);
      res.render('layoutBuilder.html', {
        'layout': '2-0',
        'h1': 'Activate your account',
        'form': {
          'action': 'account-activated',
          'inputs': [
            {
              'type': 'partial',
              'path': '/account/activationCode'
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
              'type': 'hidden',
              'name': 'accountStatus',
              'id': 'accountStatus',
              'value': 'activated'
            },
            {
              'type': 'hidden',
              'id': 'hasSignedIn',
              'name': 'hasSignedIn',
              'value': true
            },
            {
              'type': 'details',
              'summary': 'I haven\'t received my activation code',
              'text': '<p class="govuk-body">It may take a few minutes for the email to arrive. Please check your email spam  or junk mail folder. If you still haven\'t received your email, you can  <a href="#">re-send the activation code</a>.'
            }

          ],

          'buttonText': 'Activate account'
        }

      })
    })
  })

// to do - currently form just validates regardless of Code
// check the activation code

  router.get('/account/account-verification-check', function (req, res) {
    var emailAddress = req.session.data['accountEmail']
    var activationCode = req.session.data['activationCode']
    switch (activationCode) {
      case '123456':
        res.redirect('/account/account-activated')
        break
    }
  })

  router.get('/account/account-activated', function (req, res) {
    var emailAddress = req.session.data['accountEmail']
    var activationCode = req.session.data['activationCode']

    res.render('layoutBuilder.html', {
      'layout': '2-0',
      'h1': 'Acccount activated',

      'form': {
        'action': '../search',
        'inputs': [
          {
            'type': 'partial',
            'path': '/account/accountActivated'
          }
        ],
        'buttonText': 'Search for jobs'
      }
    })
  })

  router.get('/account/sign-out', function (req, res) {
    req.session.destroy()
    res.render('layoutBuilder.html', {
      'layout': '2-0',
      'h1': 'Signed out',

      'form': {
        'action': '../search',
        'inputs': [
          {
            'type': 'partial',
            'path': '/account/signedOut'
          }
        ],
        'buttonText': 'Search for jobs'
      }
    })
  })

// Verify a GOV email address for internal jobs

// Ask for Gov or work related email address to send activation link to

  router.get('/account/verify-cs', function (req, res) {
    res.render('layoutBuilder.html', {
      'layout': '2-0',
      'h1': 'Verify your Civil Service or work email address',

      'form': {
        'action': 'verify-cs-link-sent',
        'inputs': [

          {
            'type': 'text',
            'id': 'csEmail',
            'name': 'csEmail',
            'label': 'Civil Service or work email address',
            'hint': 'Enter your Civil Service email address or a recognised government email address'
          }

        ],
        'buttonText': 'Verify your email address'

      }

    })
  })

  // Notify user has been sent an activation link to their (GOV) email address

  router.get('/account/verify-cs-link-sent', function (req, res) {

    if (req.session.data) {
      req.session.data.isGov = true
      req.session.save(() => {
        console.log(req.session.data)
      })
    }

    res.render('layoutBuilder.html', {
      'layout': '2-1',
      'partial': 'account/emailVerify',
      'cs': true,
      'h1': 'Check your email',

      'form': {
        'action': '../search',
        'inputs': [
          {
            'type': 'partial',
            'path': 'account/verifyLink'
          },

          {
            'type': 'details',
            'summary': 'I haven\'t received my verification email',
            'text': '<p class="govuk-body">It may take a few minutes for the email to arrive. Please check your email spam  or junk mail folder. If you still haven\t received your email after a short while, you can  <a href="#">re-send a verification link</a>.'
          }

        ],

        'buttonText': 'Search for a job'

      }

    })
  })

// Message to say account has been verified - user can see internal jobs

  router.get('/account/verify-cs-verified', function (req, res) {
    res.render('layoutBuilder.html', {
      'layout': '2-0',

      'h1': 'Your Civil Service email account has been verified',

      'form': {
        'action': '../search',
        'inputs': [

          {
            'type': 'partial',
            'path': 'account/emailVerified'
          }

        ],
        'buttonText': 'Search for jobs'

      }

    })
  })
}
