const timeScript = document.createElement('script');
timeScript.textContent = 
`
var timer
function mouseover(e){
  console.log(e)
  timer = setTimeout(() => {location.href = e}, 500);
}
function mouseout(){
  clearTimeout(timer)
}
`;
(document.head||document.documentElement).appendChild(timeScript);
timeScript.remove();

const marker = String(Math.random())
const insertProperty = '<a onmouseover=mouseover(this.href) onmouseout=mouseout() marker=' + marker

setInterval(() => {
  const elts = document.getElementsByTagName('a');
  for (let i = elts.length - 1; i >= 0; --i) {
    if (elts[i].outerHTML.indexOf(marker) === -1) {
      elts[i].outerHTML = elts[i].outerHTML.replace('<a', insertProperty)
    }
  }
}, 1000)