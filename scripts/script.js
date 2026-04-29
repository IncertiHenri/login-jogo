document.getElementById("loginJogo").onsubmit = (e) => {

    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = Number(document.getElementById("senha").value);
    let verificacao = false;

    if(!usuario) return alert("Informe um usuário válido!");

    if(!senha) return alert("Informe uma senha válida!");

    let usuarioCorreto = "demiurge";
    let senhaCorreta = 33550336;

    if(usuario === usuarioCorreto && senha === senhaCorreta){
        verificacao = true; 
        alert("Login realizado com sucesso!");
        window.location.href = "index2.html";
    } else {
        return alert("Nome de usuário ou senha incorretos!");
    }
}