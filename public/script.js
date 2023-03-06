function isMobile(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
        return true;
    } 
    else return false;
}

function toBlock(block, where="center"){
    let options = {block: where, inline: "center", behavior: "smooth"};
    block.scrollIntoView(options);
}

function toProgram(){
    let prog = document.getElementById("program");
    if(isMobile()) toBlock(prog, "start");
    else toBlock(prog);
}

function toUs(){
    let us = document.getElementById("toDiscription");
    toBlock(us, "start");
}

function toContacts(){
    let con = document.getElementById("toContacts");
    toBlock(con, "start");
}

function openReq(){
    let anketa = document.getElementById("anketa");
    anketa.style.display = "flex";
}

function closeReq(){
    let anketa = document.getElementById("anketa");
    anketa.style.display = "none";
    document.querySelector('form').reset();
}

function disableRadios(){
    let r1 = document.getElementById("age_r1");
    let r2 = document.getElementById("age_r2");
    let r3 = document.getElementById("age_r3");
    let radios = [r1, r2, r3];

    radios.forEach((r)=>{
        r.disabled = true;
        r.checked = false;
    });
}

function enableRadios(){
    let r1 = document.getElementById("age_r1");
    let r2 = document.getElementById("age_r2");
    let r3 = document.getElementById("age_r3");
    let radios = [r1, r2, r3];
    let other_r = document.getElementById("other_r");
    console.log(other_r);
    console.log(document.activeElement);

    if(document.activeElement !== other_r)
    radios.forEach((r)=>{
        r.disabled = false;
    });
}

function clearOtherInput(e){
    let other_r = document.getElementById("other_r");
    if(e.target.id !== "send")
        other_r.value = "";
}

let r1 = document.getElementById("age_r1");
let r2 = document.getElementById("age_r2");
let r3 = document.getElementById("age_r3");
let radios = [r1, r2, r3];

let other_r = document.getElementById("other_r");
other_r.onfocus = disableRadios;
other_r.onblur = enableRadios;

radios.forEach((r)=>{
    r.onclick = () => {other_r.value = "";}
});

document.getElementById("req").onclick = openReq;
document.getElementById("closeBtn").onclick = closeReq;

document.getElementById("navProg").onclick = toProgram;
document.getElementById("navUs").onclick = toUs;
document.getElementById("navContacts").onclick = toContacts;
//Загрузочный экран

window.onload = function() 
{

    setTimeout(function() 
    {
        document.getElementById('preloader').style.display = "none";
    }, 400);

    if(sessionStorage.getItem("IsSend") === "True")
    {
        openAlert();
        sessionStorage.setItem("IsSend", "False")
    }

};

function closeAlert()
{
    document.querySelector(".alert-parent").style.display = "none";
}

function openAlert()
{
    document.querySelector(".alert-parent").style.display = "flex";
   
    setTimeout(function() 
    {
        document.querySelector(".alert-parent").style.display = "none";
    }, 2000);
}


let closeButton = document.querySelector(".btn-close");

closeButton.onclick = closeAlert;

let sendBtn = document.getElementById("send");

sendBtn.onclick = () => sessionStorage.setItem("IsSend", "True");