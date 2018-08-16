// Search

function checkUserData(req, res){
  // if a user is not logged in redirect to the log in screen

    if(req.session.data.user === undefined){
      signedIn = false
    }
    else{
      signedIn = true
    }

    // update the user name if a user has been through thr registration journey
    if (req.session.data.fullName){
      req.session.data.user.name = req.session.data.fullName
    }

    return signedIn
}
module.exports = function(router) {

  router.get('/search/', function (req, res) {

res.render('./search/search-results.html',{



  'h1': 'Look for a job',
  'captionXL' : 'Search and apply for jobs within the Civil Service and central government organisations',
        'form': {
          'inputs': [
        {
          'type': 'text',
          'name': 'keyword',
          'id': 'keyword',
          'label': 'Keyword (optional)',
          'hint': 'Enter a job title or skill',
          'errorText': 'You must enter a valid email address',
          'width' : '20'
        },
        {
          'type': 'text',
          'name': 'location',
          'id': 'location',
          'label': 'Location (optional)',
          'errorText': 'You must enter a valid email address',
          'width' : '20'
        }

        ],

 'buttonText' : 'Search',
 'buttonUrl' : 'search/results'
}

}



    )




  }
)


  }
