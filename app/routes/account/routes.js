// Search

module.exports = function (router) {
  router.get('/account/sign-in', function (req, res) {
    delete req.session.data
    let so = false
    if (req.query.signedout) {
      so = req.query.signedout
    }
    res.render('layoutBuilder.html', {
      'signedout': so,
      'layout': '2-1',
      'partial': 'account/createAccountAdvice',
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
          'width': '20'
        },
        {
          'type': 'password',

          'name': 'accountPassword',
          'id': 'accountPassword',
          'label': 'Password',
          'width': '20'
        },
        {
          'type': 'html',
          'html': '<p class="govuk-body"><a class="govuk-link" href="recover-account">I can\'t access my account</a></p>'
        }

        ],

        'buttonText': 'Sign in',
        'buttonUrl': '../search'
      }

    })
  })

  router.get('/validation', (req, res) => {
    let allowed = true
    const inputs = {}
    const url = req.headers.referer.split('?')[0]
    let success = '?'
    const items = Object.keys(req.query).map((item) => {
      return {'input': item, 'value': req.query[item]}
    })

    items.forEach((item, index) => {
      inputs[item.input] = item.value
      if (item.value === '') {
        allowed = false
      }
      if (item.input !== 'destination') {
        success += `${item.input}=${item.value}&`
      }
      if ((index + 1) === items.length) {
        if (!allowed) {
          // Send back to original page
          res.redirect(`${url}?inputs=${JSON.stringify(inputs)}`)
        } else {
          // Send back to next page
          res.redirect(`${req.query.destination}${success}`)
        }
      }
    })
  })

  router.get('/account/create-account', function (req, res) {
    let formInputs = false
    if (req.query.inputs) {
      formInputs = JSON.parse(req.query.inputs)
    }

    res.render('layoutBuilder.html', {

      'layout': '2-0',
      'h1': 'Create an account',
      'form': {
        'action': req.get('host') + '/validation',
        'inputs': [
          {
            'type': 'hidden',
            'name': 'destination',
            'id': 'destination',
            'value': '/account/activation-code'
          },
          {
            'type': 'text',
            'name': 'caName',
            'id': 'caName',
            'label': 'Full name',
            'errorText': formInputs ? (!formInputs.caName ? 'You must enter a name' : undefined) : undefined,
            'width': '20',
            'required': 'true',
            'value': formInputs ? (formInputs.caName ? formInputs.caName : undefined) : undefined
          },
          {
            'type': 'text',
            'name': 'accountEmail',
            'id': 'accountEmail',
            'label': 'Email address',
            'hint': 'If you are a civil servant and you would like to view and apply for internal jobs, we recommend you create an account with your work email address',
            'errorText': formInputs ? (!formInputs.accountEmail ? 'You must enter a valid email address' : undefined) : undefined,
            'width': '20',
            'required': 'true',
            'value': formInputs ? (formInputs.accountEmail ? formInputs.accountEmail : undefined) : undefined
          },
          {
            'type': 'password',
            'name': 'accountPassword',
            'hint': 'Your password must be at least eight characters including at least one uppercase letter, one special character and one number',
            'id': 'accountPassword',
            'label': 'Password',
            'errorText': formInputs ? (!formInputs.accountPassword ? 'Please enter a valid password' : undefined) : undefined,
            'width': '20',
            'required': 'true',
            'value': formInputs ? (formInputs.accountPassword ? formInputs.accountPassword : undefined) : undefined
          },
          {
            'type': 'password',
            'name': 'accountConfirmPassword',
            'id': 'accountConfirmPassword',
            'label': 'Confirm password',
            'errorText': formInputs ? (!formInputs.accountConfirmPassword ? 'Please enter a valid password' : undefined) : undefined,
            'width': '20',
            'required': 'true',
            'value': formInputs ? (formInputs.accountConfirmPassword ? formInputs.accountConfirmPassword : undefined) : undefined
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
      isGov: !!req.query.accountEmail.includes('gov.uk')
    }

    req.session.save(() => {
      res.render('layoutBuilder.html', {
        'layout': '2-0',
        'h1': 'Activate your account',
        'form': {
          'action': '/search/results',
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

  router.get('/account/verify-cs', function (req, res) {
    let sessionData = false

    if (req.session.data) {
      sessionData = req.session.data
      console.log(req.session.data)
    }

    res.render('layoutBuilder.html', {
      'layout': '2-0',
      'h1': 'Verify your Civil Service work email address',
      'sessionData': sessionData,
      'form': {
        'action': 'verify-cs-link-sent',
        'inputs': [

          {
            'type': 'text',
            'id': 'csEmail',
            'name': 'csEmail',
            'label': 'Civil Service or work email address',
            //  'hint': 'Enter your Civil Service email address or a recognised government email address',
            'width': '20'
          }

        ],
        'buttonText': 'Verify your email address'

      }

    })
  })

  router.get('/account/verify-cs-link-sent', function (req, res) {
    console.log(req.query)
    if (req.session.data) {
      req.session.data.isGov = true
      req.session.save(() => {
        console.log(req.session.data)
      })
    }

    res.render('layoutBuilder.html', {
      'sessionData': req.session.data,
      'layout': '2-0',
      'cs': true,
      'h1': 'Check your email',
      'form': {
        'action': '../search/results',
        'inputs': [
          {
            'type': 'partial',
            'path': 'account/verifyLink'
          },
          {
            'type': 'hidden',
            'name': 'isCS',
            'id': 'isCS',
            'value': 'true'
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
