const { reportUrlChange, RESET_URL } = require('components/Layout')

exports.onRouteUpdate = ({ _location }) => {
  window.analytics && window.analytics.page()
}

exports.onInitialClientRender = () => {
  // when leaving website, reset url
  window.onbeforeunload = () => reportUrlChange(RESET_URL)
}
