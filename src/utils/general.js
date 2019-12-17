function showDialog(id) {
  document.body.classList.add('dialog-parent-hidden')
  const el = document.getElementById(id)
  const elCon = document.querySelector(`#${id}>.dialog-content`)
  el.classList.remove('hide-dialog')
  el.classList.add('show-dialog')
  if (elCon) {
    elCon.addEventListener('click', function(e) {
      e.stopPropagation()
    })
  }
  el.addEventListener('touchmove', function(e) {
    e.preventDefault()
    e.stopPropagation()
  })
  el.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    if (elCon) {
      hideDialog(id)
    }
  })
}

function hideDialog(id) {
  document.body.classList.remove('dialog-parent-hidden')
  const el = document.getElementById(id)
  el.classList.remove('show-dialog')
  el.classList.add('hide-dialog')
}

const toastManager = {
  toastStack: [],
  animateCSS: function(element, animationName, callback) {
    element.classList.add('toast-animated', animationName)

    function handleAnimationEnd() {
      element.classList.remove('toast-animated', animationName)
      element.removeEventListener('animationend', handleAnimationEnd)
      if (typeof callback === 'function') {
        callback()
      }
    }

    element.addEventListener('animationend', handleAnimationEnd)
  },
  toast: function(msg) {
    const parent = document.querySelector('body')
    if (parent) {
      const toast = document.createElement('div')
      toast.setAttribute('class', 'toast-manager')
      toast.innerText = msg
      parent.appendChild(toast)
      this.animateCSS(toast, 'toast-popup', function() {
        parent.removeChild(toast)
      })
    }
  }
}

function setCookie(key, value, exDays) {
  const exDate = new Date()
  exDate.setDate(exDate.getDate() + exDays)
  document.cookie = key + '=' + escape(value) + ((exDays == null) ? '' : ';expires=' + exDate.toGMTString())
}

function getCookie(key) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(key + '=')
    if (c_start !== -1) {
      c_start = c_start + key.length + 1
      let c_end = document.cookie.indexOf(';', c_start)
      if (c_end === -1) {
        c_end = document.cookie.length
      }
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}

function wanUnit(num) {
  if (isNaN(num)) {
    return ''
  }
  const number = parseInt(num)
  if (number < 10000) {
    return number.toString()
  } else {
    return ((number * 10) / 100000).toFixed(1) + '万'
  }
}

function toHms(s) {
  const sec = parseInt(s, 10)
  const hour = Math.floor(sec / 3600)
  const min = Math.floor(sec / 60) % 60
  const second = sec % 60
  return [hour, min, second]
    .map(function(v) {
      if (v < 10) {
        return '0' + v
      } else {
        return '' + v
      }
    })
    .join('')
}

function toDhms(s) {
  const sec = parseInt(s, 10)
  const day = Math.floor(sec / 86400)
  const hour = Math.floor((sec % 86400) / 3600)
  const min = Math.floor(sec / 60) % 60
  const second = sec % 60
  const tList = [];
  [day, hour, min, second]
    .map(function(v) {
      tList.push('' + v)
    })
  return tList
}

function onJpushEventCount(eventId) {
  const CountEvent = window.JAnalyticsInterface.Event.CountEvent
  const cEvent = new CountEvent(eventId)
  // cEvent.addKeyValue("key1", "value1").addKeyValue("key2", "value2");
  window.JAnalyticsInterface.onEvent(cEvent)
}

function isIos() {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
}

function isWechat() {
  return /MicroMessenger/.test(navigator.userAgent)
}

function changePageTitle(title) {
  document.title = title
  const frame = document.createElement('iframe')
  frame.style.display = 'none'
  frame.onload = function() {
    setTimeout(function() {
      frame.remove()
    }, 1)
  }
  document.body.appendChild(frame)
}

export {
  showDialog,
  hideDialog,
  wanUnit,
  toHms,
  toDhms,
  onJpushEventCount,
  isIos,
  isWechat,
  toastManager,
  setCookie,
  getCookie,
  changePageTitle
}
