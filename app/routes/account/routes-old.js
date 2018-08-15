// Search


module.exports = function(router) {

  router.get('/account/sign-in', function(req, res) {

    res.render('layoutBuilder.html', {
      'layout': '2-0',
    //  'partial': 'account/createAccountAdvice',
      'h1': 'Sign in to your account',
      'captionXL': 'Sign in to apply for jobs and view and manage your job applications',
      'form': {
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
      'captionXL': 'Creating an account makes it easy to complete job applications, track your application progress and receive notifications and job alerts by email.',


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
            'hint': 'We will use this email address to sign you in to this service, send you job alerts and notifications about your job applications',
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
          },

          {
            'type': 'conditionallyRevealMultiInput',
            'groupName': 'propertySearchOptions',
            'label': 'Are you currently employed as a civil servant?',
            'required': true,
            'errorText': 'Please select an option',
            'radios': [{
                'id': 'yesCS',
                'label': 'Yes, I am a civil servant',
                'value': 'yesCS',
                'name': 'yesCS',
                'concealedInputs': [{
                  'concealedLabel': 'Your work email address',
                  'concealedName': 'csEmailAddress',
                  'concealedId': 'csEmailAddress',
                  'concealedType': 'text',
                  'concealedHint': 'Provide your work email address to view and apply for internal job vacancies. We will send an activation email to this address. If you cannot access your work address, you can provide your manager\'s email address'


                }]

              },
              {
                'id': 'noCS',
                'label': 'No, I am not a civil servant',
                'value': 'noCS',
                'name': 'noCS',
                'checked': 'checked'
              }


            ]

          }, {
            'type': 'details',
            'summary': 'Why do you need this information?',
            'text': '<p class="govuk-body">If you are a civil servant:</p><ul class="govuk-list govuk-list--bullet"><li>If you want to view internal jobs and have a UK government work-related email address, then you can view and apply for internal jobs.</li><li>The information is used only for this purpose.</li><li>If you do not have access to your work email address you can provide the email address of your manager.</li></ul><p class="govuk-body">If you are not a civil servant:</p><ul class="govuk-list govuk-list--bullet"><li>You will not be able to view or apply for internal job vancancies.</li><li>For more information, see the Civil Service\'s <a href="#">Internal jobs policy</a>'
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
      'captionXL': 'We have sent an activation email to your email address: itsme@myorganisation.co.uk. Please check your email inbox and click the link to activate your account.',


      'form': {
        'inputs': [



         {
            'type': 'details',
            'summary': 'I haven\'t received my activation link',
            'text': '<p class="govuk-body">It may take a few minutes for the email to arrive. Please check your email spam  or junk mail folder. If you still haven\t received your email after a short while, you can  <a href="#">re-send activation link</a>.'
          },

        ],

        'buttonText': 'Search for a job',
        'buttonUrl': '../search'
      }

    })
  })


}
