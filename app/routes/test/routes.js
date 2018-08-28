// Search


module.exports = function(router) {

router.get('/test/', function (req, res) {
var email = req.session.data['accountEmail']
res.render('layoutBuilder.html',{


'layout' : '2-0',
'h1': 'Create an account',



      'form': {

        'action': '/test/output.html',
        'name' : 'test',
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

'buttonText': 'Continue',
'buttonDisabled': false
}

}
  )
}
)

router.get('/test/output/', function (req, res) {

var emailAddress = req.session.data['accountEmail']
var isCS = emailAddress.includes('gov.uk');


res.render('test/output.html',{
'email' : emailAddress,
'cs' : isCS,

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
      {'type': 'dump'}



      ],

'buttonText' : 'Sign in',
'buttonDisabled' : 'search/results'
}

}
  )
}
)

  }
