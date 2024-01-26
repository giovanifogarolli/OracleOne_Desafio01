var txtinput = document.getElementById("decod-txt");
var txtouput = document.getElementById("result-txt")

console.log("txtinput")

function criptografar(){
    var txtcripto = txtinput.value.toLowerCase().replaceAll(/e/g, "enter").replaceAll(/i/g, "imes").replaceAll(/a/g, "ai").replaceAll(/o/g, "ober").replaceAll(/u/g, "ufat")
    txtouput.innerHTML = txtcripto
}

function descriptografar(){
    var txtdescripto = txtinput.value.toLowerCase().replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ai/g, "a").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u")
    txtouput.innerHTML = txtdescripto
}

function copy() {
    let copyText = document.getElementById("result-txt");
    copyText.select();
    document.execCommand("copy");
    alert("Copiado com sucesso")
  }


function menuAction(){
    var menu = document.getElementById("cred-content")
    var menu_btn = document.getElementById("btn-content")
    var container = document.getElementById("menu-container")

    if(menu_btn.classList.contains("closed")){
        menu_btn.classList.remove("closed")
        menu_btn.classList.add("open")
        menu.classList.remove("hidden")
        menu.classList.add("animate__animated")
        menu.classList.add("animate__fadeIn")
        container.classList.add("on")
        container.classList.remove("off")
    }else if(menu_btn.classList.contains("open")){
        menu_btn.classList.remove("open")
        menu_btn.classList.add("closed")
        menu.classList.add("hidden")
        menu.classList.remove("animate__fadeInLeft")
        container.classList.remove("on")
        container.classList.add("off")
    }

}