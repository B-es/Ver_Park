let req = document.getElementById("req")

function toForm(){
    let form = document.getElementById("form");
    let options = {block: "center", inline: "center", behavior: "smooth"};
    form.scrollIntoView(options);
}

req.onclick = toForm;


//Форма
var bz=document.querySelector('#hamburger')

bz.onclick=function()
{
    document.getElementById('forma').style.display="block"
    document.getElementById('forma').style.animation= "move-left 1.5s ease-in-out 0s"
    document.getElementById('forma').style.zIndex="100"
}

var c=document.querySelector('#closeBtn')
c.onclick=function()
{
    document.getElementById('forma').style.animation= "move-right 1.5s ease-in-out 0s"
    document.getElementById('forma').style.animationFillMode="forwards"
}