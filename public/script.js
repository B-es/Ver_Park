let req = document.getElementById("req")

function toBlock(block, where="center"){
    let options = {block: where, inline: "center", behavior: "smooth"};
    block.scrollIntoView(options);
}

function toProgram(){
    let prog = document.getElementById("program");
    toBlock(prog);
}

function toUs(){
    let us = document.getElementById("toDiscription");
    toBlock(us, "start");
}

document.getElementById("navProg").onclick = toProgram;
document.getElementById("navUs").onclick = toUs;
//Загрузочный экран

window.onload = function() 
{

    setTimeout(function() 
    {
        document.getElementById('preloader').style.display = "none";
    }, 400);

    
};