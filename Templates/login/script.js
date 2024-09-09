function mostrarSenha(){
    var input = document.getElementById("senha")
    var button = document.getElementById("img-btn-olho")
    if (input.type === 'text') {
        input.type = 'password';
        button.setAttribute("src","./assets/eye-slash-regular.svg" )
    } else {
        input.type = 'text';
        button.setAttribute("src","./assets/eye-regular.svg" )
    }

}

document.getElementById("btnAbrirOlho").addEventListener("click", () => mostrarSenha() )