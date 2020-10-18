let eles_length = document.querySelectorAll("span[data-tuiguang]").length;
let i = 0;
function stop(){
  if (i>=eles_length){
    clearInterval(hi_intv)
  }
}
let hi_intv = setInterval(function(){
  let ele = document.querySelectorAll("span[data-tuiguang]")[0];
  let ad = ele.parentElement.parentElement.parentElement.parentElement;
  ad.parentElement.removeChild(ad);
  console.log(i++);
  stop();
}, 500);
