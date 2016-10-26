var loadImgs = function () {
  var divs = document.getElementsByClassName('js-img');
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    if (div.getAttribute('data-finished')) {
      continue;
    }
    var minWidth = div.getAttribute('data-min-width');
    if (minWidth && minWidth > window.outerWidth) {
      continue;
    }
    var elem = document.createElement('img');
    elem.src = div.getAttribute('data-src');
    elem.alt = div.getAttribute('data-alt');
    elem.className = div.getAttribute('data-class');
    div.appendChild(elem);
    div.setAttribute('data-finished', 'true');
  }
}
window.onload = loadImgs;
window.onresize = loadImgs;
