let ratioWidth = document.getElementById("ratio-width");
let ratioheight = document.getElementById("ratio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");
let CalculateWidth = () =>{
    let aspectRatio = ratioWidth.value/ratioheight.value;
    width.value = parseFloat((height.value*aspectRatio).toFixed(2));

}
let CalculateHeight = () =>{
    let aspectRatio = ratioWidth.value/ratioheight.value;
  height.value = parseFloat((width.value*aspectRatio).toFixed(2));
 
}
height.addEventListener("input" , CalculateWidth);
width.addEventListener("input" , CalculateHeight);
ratioheight.addEventListener("input" , CalculateWidth);
ratioWidth.addEventListener("input" , CalculateHeight);