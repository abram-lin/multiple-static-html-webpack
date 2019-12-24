import '../../utils/adaptive'
import '../../style/general.scss'
import './index.scss'

window.adaptive.desinWidth = 750 // design width
window.adaptive.baseFont = 18
window.adaptive.maxWidth = 480 // max width
window.adaptive.init()

window.toPage2 = function() {
  window.location.href = 'page2.html'
}
