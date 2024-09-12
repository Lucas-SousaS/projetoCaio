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

function setCadastro(){
    var leftDiv = document.getElementById("leftDiv")
    var rightDiv = document.getElementById("rightDiv")
    
    if(leftDiv.classList.contains("porcento")){
        leftDiv.classList.remove("porcento")
        leftDiv.classList.add("maisPorcento")
        leftDiv.innerHTML=""
        leftDiv.innerHTML= `<h1 class="bem-vindo">
        Bem-Vindo
    </h1>

    <div class="area-cadastro">

        <div class="nomeSobrenome">
            <input type="text" name="nome" id="nome" class="inputCadastro inputDividido" placeholder="Digite seu nome">
            <input type="text" name="sobrenome" id="sobrenome" class="inputCadastro inputDividido" placeholder="Digite seu sobrenome">
        </div>

        <input type="number" name="cpf" id="cpf" class="inputCadastro" placeholder="Digite seu CPF">

        <input type="tel" name="telefone" id="telefone" class="inputCadastro" placeholder="Digite seu telefone">

        <input type="email" name="email" id="email" class="inputCadastro" placeholder="Digite seu email">

        <input type="password" name="senhaCadastro" id="senhaCadastro" class="inputCadastro" placeholder="Digite sua senha">
    

        <button class="btn-cadastro" onclick="setCadastro()">
            Cadastre-se
        </button>
    </div>

    <div></div>`
    } else {
        leftDiv.classList.add("porcento")
        leftDiv.classList.remove("maisPorcento")
        leftDiv.innerHTML = ""
        leftDiv.innerHTML = `
        <h1 class="bem-vindo">
        Bem-Vindo
    </h1>

    <div class="area-cadastro">

        <h2>Crie sua conta</h2>

        <button class="btn-cadastro" onclick="setCadastro()">
            Cadastre-se
        </button>
    </div>

    <div></div>`
    }

    if(rightDiv.classList.contains("porcento")){
        rightDiv.classList.remove("porcento")
        rightDiv.classList.add("maisPorcento")
        rightDiv.innerHTML = ""
        rightDiv.innerHTML = `<div class="box-right-div">
        <h1 class="title-login">Faça Login</h1>
        
        <div class="box-inputs">
            <input type="text" class="input" name="nome" id="nome" placeholder="Usúario">
            <div class="box-input-olho">
                <input type="password" class="input" name="senha" id="senha" placeholder="Senha">
                <button id="btnAbrirOlho">
                    <img id="img-btn-olho" src="./assets/eye-regular.svg" alt="Mostrar a senha">
                </button>
            </div>
        </div>
        
        <button class="btn-login">
            Entrar
        </button>
    </div>`
    } else {
        rightDiv.classList.add("porcento")
        rightDiv.classList.remove("maisPorcento")
        rightDiv.innerHTML = ""
        rightDiv.innerHTML = `<div class="box-right-div">
        <h1 class="bem-vindo">
            Bem-Vindo
        </h1>

        <div class="area-cadastro">

            <h2 class="titleLogin">Já tem Conta? Faça Login</h2>

            <button class="btn-cadastro" onclick="setCadastro()">
                Entrar 
            </button>
        </div>

        <div></div>
    </div>`
    }
}

document.getElementById("btnAbrirOlho").addEventListener("click", () => mostrarSenha() )