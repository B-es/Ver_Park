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
    // if(isMobile()) toBlock(prog, "start");
    // else toBlock(prog);
    toBlock(prog, "start");
}

function toUs(){
    let us = document.getElementById("toDiscription");
    toBlock(us, "start");
}

function toContacts(){
    let con = document.getElementById("toContacts");
    toBlock(con, "start");
}

function toRoutes()
{
    let con = document.getElementById("routes");
    toBlock(con, "start");
}

function openReq(){
    let anketa = document.getElementById("anketa");
    anketa.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeReq(){
    let anketa = document.getElementById("anketa");
    anketa.style.display = "none";
    document.querySelector('form').reset();
    document.body.style.overflow = "auto";
}

function openColab(){
    let colab = document.getElementById("colab");
    colab.style.display = "flex";
    document.body.style.overflow = "hidden";
    console.log("Rab")
}

function closeColab(){
    let colab = document.getElementById("colab");
    colab.style.display = "none";
    document.body.style.overflow = "auto";
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

    document.getElementById("other_r").value = "";
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

let other_r = document.getElementById("other_r");

function inputEqualRadio(e)
{
    other_r.value = e.target.value;
}

let r1 = document.getElementById("age_r1");
let r2 = document.getElementById("age_r2");
let r3 = document.getElementById("age_r3");
let radios = [r1, r2, r3];


other_r.onfocus = disableRadios;
other_r.onblur = enableRadios;

radios.forEach((r)=>{
    r.onclick = inputEqualRadio;
});

document.getElementById("req").onclick = openReq;
document.getElementById("req2").onclick = openReq;
document.getElementById("closeBtn").onclick = closeReq;

document.getElementById("navProg").onclick = toProgram;
document.getElementById("navUs").onclick = toUs;
document.getElementById("navContacts").onclick = toContacts;
document.getElementById("navColab").onclick = openColab;
document.getElementById("colab").onclick = closeColab;

document.getElementById("back-to-scheme1").onclick = toRoutes;
document.getElementById("back-to-scheme2").onclick = toRoutes;
document.getElementById("back-to-scheme3").onclick = toRoutes;

//?????????????????????? ??????????

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

if(!isMobile()){
    AOS.init();
}
else
{
    document.head.querySelectorAll('link')[4].remove();
}

let map = document.getElementById('map');
// ?????????????? ?????????? observer (??????????????????????)
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
// ?????????????? ?? ?????????????? ?????? ??????????????
        console.log(entry.target);
// ?????????????? ?? ?????????????? true (???????? ?????????????? ??????????) ?????? false (???????? ??????)
        console.log(entry.isIntersecting);
        
        if(entry.isIntersecting && map.innerHTML === ""){
            map.innerHTML += `<div style="position:relative;overflow:hidden;height:100%;width:100%;"><a href="https://yandex.ru/maps/38/volgograd/search/%D0%9A%D0%BE%D0%BC%D1%81%D0%BE%D0%BC%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D1%81%D0%B0%D0%B4%20(%D0%B3%D0%BE%D1%80%D1%81%D0%B0%D0%B4)/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;height:100%;width:100%;">?????????????????????????? ?????? (????????????) ?? ????????????????????</a><a href="https://yandex.ru/maps/38/volgograd/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;height:100%;width:100%;">??????????????????</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=44.509396%2C48.709043&mode=search&sll=44.509396%2C48.709043&source=mapframe&text=%D0%9A%D0%BE%D0%BC%D1%81%D0%BE%D0%BC%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D1%81%D0%B0%D0%B4%20%28%D0%B3%D0%BE%D1%80%D1%81%D0%B0%D0%B4%29&utm_source=mapframe&z=17" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;height:100%;width:100%;"></iframe></div>`;
        }
    });
});

// ???????????? ?????????????? ?????? ????????????????????
let el = document.getElementById('map');

// ?????????????????????? ?????? ?? ??????????????????????????
observer.observe(el);
