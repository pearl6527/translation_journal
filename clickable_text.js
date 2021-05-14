function change(texts, elt, colors) {
  // document.getElementById(texts[0]).classList.add('changeable');
  if (elt === undefined) {
    elt = toPlain(texts[0]);
  }
  var col = colors !== undefined;
  var x = document.getElementById(elt);
  c = rgb2hex(window.getComputedStyle(x).backgroundColor);
  // alert("hi");
  // alert(x.innerHTML);
  let str = toPlain(x.innerHTML);
  // alert(str);
  var ind = 0;
  for (let i = 0; i < texts.length; i++) {
    if (str === toPlain(texts[i]) && (!col || c === colors[i])) {
      ind = (i + 1) % texts.length;
      x.innerHTML = texts[ind];
      if (colors != undefined) {
        x.style.backgroundColor = colors[ind % colors.length];
      }
      break;
    }
  }
};
var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
};
function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
};
function change_distant(texts, classname) {
  var x = document.getElementsByClassName(classname);
  var xHTML = [];
  for (let i = 0; i < x.length; i++) {
    xHTML.push(x[i].innerHTML);
    // alert(x[i].innerHTML);
  }
  for (let i = 0; i < texts.length; i++) {
    if (compareList(xHTML, texts[i])) {
      var ind = (i + 1) % texts.length;
      for (let j = 0; j < texts[0].length; j++) {
        x[j].innerHTML = texts[ind][j];
      }
      break;
    }
  }
};

document.addEventListener(
  "mousedown",
  function (event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  },
  false
);

function toPlain(str) {
  plain = str.replace(/<br\s*\/?>/gi, '');
  plain = plain.replace(/\s+/g,' ').trim();
  return plain;
};

function compareList(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (toPlain(list1[i]) !== toPlain(list2[i])) {
      return false;
    }
  }
  return true;
}
