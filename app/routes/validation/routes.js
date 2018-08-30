module.exports = function (router) {
  // Generic form validation
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
}
