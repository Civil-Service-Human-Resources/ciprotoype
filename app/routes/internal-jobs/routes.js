// Internaljobs


module.exports = function(router) {

  router.get('/internal-jobs/', function (req, res) {

res.render('./internal-jobs/index.html',{



  'h1': 'Access internal jobs',
        'form': {
          'inputs': [
        {
          'type': 'text',
          'name': 'this is the name',
          'id': 'this is the ID',
          'label': 'Enter your work email address',
          'hint': 'Must be a valid work email address',
          'errorText': 'You must enter a valid email address'
        }
        ],
 'backTo': 'http://www.bbc.co.uk/news',
 'buttonText' : 'Send activation link',
 'buttonUrl' : 'http://www.bbc.co.uk/news'
}

}
    )
  }
)


  }
