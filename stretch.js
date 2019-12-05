function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function addPrefix(str) {
    var i = 1;
    let tmp = str.split('\n'),
        res = [];

    // res.push("[ !] >> | " + headerStr);

    for (const frag of tmp) {
        res.push('<span class="code">[' + pad(i, 2, ' ') + "] >> | </span>" + frag);
        i += 1;
    }

    console.log(res.join('<br>'));

    return res.join('<br>');
}

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// console.log(getTextWidth("=", "3.5em Roboto Mono"));
var cWidth = 22; //19.73; //getTextWidth("=", "3.5em Roboto Mono")
var wCount = Math.floor(width / cWidth / 2) - 7;

document.getElementById("header").innerHTML = "!" + "=".repeat(wCount) + " Luuk's realm " + "=".repeat(wCount) + "!";
// console.log(document.getElementById("main_text").innerHTML);
document.getElementById("main_text").innerHTML = addPrefix(document.getElementById("main_text").innerHTML);
document.getElementById("navigation_text").innerHTML = addPrefix(document.getElementById("navigation_text").innerHTML);
