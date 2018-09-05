// Search
const utils = require('../../../lib/utils.js')

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

  router.get('/account/create-account', function (req, res) {
    let formInputs = utils.getFormInputs(req.query)

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
    if (req.query.accountEmail) {
      req.session.data = {
        caName: req.query.caName,
        accountEmail: req.query.accountEmail,
        accountPassword: req.query.accountPassword,
        isGov: utils.isGovEmail(req.query.accountEmail)
      }
    }

    let formInputs = utils.getFormInputs(req.query)

    req.session.save(() => {
      res.render('layoutBuilder.html', {
        'layout': '2-0',
        'h1': 'Activate your account',
        'form': {
          'action': req.get('host') + '/validation',
          'inputs': [
            {
              'type': 'hidden',
              'name': 'destination',
              'id': 'destination',
              'value': '/search/results'
            },
            {
              'type': 'partial',
              'path': '/account/activationCode'
            },
            {
              'type': 'text',
              'name': 'activationCode',
              'id': 'accountEmail',
              'label': 'Activation code',
              'width': '20',
              'errorText': formInputs ? (!formInputs.accountEmail ? 'Please enter a valid activation code' : undefined) : undefined,
              'value': formInputs ? (formInputs.accountEmail ? formInputs.accountEmail : undefined) : undefined
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

    let formInputs = utils.getFormInputs(req.query)

    res.render('layoutBuilder.html', {
      'layout': '2-0',
      'h1': 'Verify your Civil Service work email address',
      'sessionData': sessionData,
      'form': {
        'action': req.get('host') + '/validation',
        'inputs': [
          {
            'type': 'hidden',
            'name': 'destination',
            'id': 'destination',
            'value': 'account/verify-cs-link-sent'
          },
          {
            'type': 'text',
            'id': 'csEmail',
            'name': 'csEmail',
            'label': 'Civil Service or work email address',
            'hint': 'Enter your Civil Service email address or a recognised government email address',
            'width': '20',
            'errorText': formInputs ? (!formInputs.csEmail ? 'Please enter a valid email' : undefined) : undefined,
            'value': formInputs ? (formInputs.csEmail ? formInputs.csEmail : undefined) : undefined
          }

        ],
        'buttonText': 'Verify your email address'

      }

    })
  })
}
