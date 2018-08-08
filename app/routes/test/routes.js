// Search


module.exports = function(router) {

  router.get('/test', function (req, res) {

res.render('layoutBuilder.html',{
  'layout' : '2-0',

  'h1': 'Test area',
  'captionXL' : 'Just a place for testing stuff without breaking anything else.',


        'form': {
          'inputs': [



            {
       'type': 'conditionallyRevealMultiInput',
       'groupName': 'propertySearchOptions',
       'label': 'Are you currently employed as a civil servant?',
       'hint': 'Civil servants can gain view and apply for jobs advertised internally in the Civil Service ',
       'required': true,
       'errorText': 'You must choose an option in order to search for a property',
       'radios': [{
           'id': 'yesCS',
           'label': 'Yes, I am a civil servant',
           'value': 'yesCS',
           'name' : 'yesCS',
           'concealedInputs': [{
             'concealedLabel': 'Your work email address',
             'concealedName': 'csEmailAddress',
             'concealedId': 'csEmailAddress',
             'concealedType': 'text',
             'concealedHint' : 'We use your work email address to verify that you are a civil servant'

           }]

         },
         {
           'id': 'noCS',
           'label': 'No, I am not a civil servant',
           'value': 'noCS',
           'name' : 'noCS'
         }


       ]
     }

        ],

 'buttonText' : 'Continue',
 'buttonUrl' : 'search/results'
}

}
    )
  }
)


router.get('/account/register', function (req, res) {

res.render('layoutBuilder.html',{


'layout' : '2-0',
'h1': 'Create an account',



      'form': {
        'inputs': [

          {
            'type': 'text',
            'name': 'caName',
            'id': 'caName',
            'label': 'Your name',
            'hint' : "Your first and last name",
            'errorText': 'You must enter a name',
            'width' : '20'
          },

      {
        'type': 'text',
        'name': 'accountEmail',
        'id': 'accountEmail',
        'label': 'Email address',
        'errorText': 'You must enter a valid email address',
        'width' : '20'
      },
      {
        'type': 'password',
        'name': 'accountPassword',
        'id': 'accountPassword',
        'label': 'Password',
        'errorText': 'Please enter a valid password',
        'width' : '20'
      },



      ],

'buttonText' : 'Sign in',
'buttonUrl' : 'search/results'
}

}
  )
}





)
  }
