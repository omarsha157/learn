window.onload = run();

function run() {

    let htmlcode=document.querySelector(".editor #html-code").value;

    let output=document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = htmlcode;

}


