const pageGenerator = require('./plop-templates/page/prompt')

module.exports = function(plop) {
  plop.setGenerator('page', pageGenerator)
}
