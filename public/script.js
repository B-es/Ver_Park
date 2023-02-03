let req = document.getElementById("req")

function toForm(){
    let form = document.getElementById("form");
    let options = {block: "center", inline: "center", behavior: "smooth"};
    form.scrollIntoView(options);
}

req.onclick = toForm;