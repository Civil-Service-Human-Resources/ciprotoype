/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // add code here

  const showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})
