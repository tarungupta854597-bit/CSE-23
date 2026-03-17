function result()
{
    let changecolor=document.getElementById('text')
    changecolor.style.color="red";
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="magenta";
} 
let para=document.getElementById('paratext');
function changeTextColor()
{
    para.style.backgroundColor='#'+Math.floor(Math.random()*1677)
}
para.addEventListener('mouseover',changeTextColor);
