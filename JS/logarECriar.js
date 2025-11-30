function logar() {
    let nome = document.getElementById("txtNome").value;
    let tipo = document.getElementById("tipoUsuario").value;
    let senha = document.getElementById("senha").value;

    if (!nome || tipo === "Escolha o tipo de usuário" || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    // Redirecionar cada tipo de usuario
    if (tipo === "escola") {
        console.log("escola")
        window.location.href = "paginaEscola.html";
    }
    else if (tipo === "professor") {
        console.log("professor")
        window.location.href = "paginaProfessor.html";
    }
    else if (tipo === "aluno") {
        console.log("aluno")
        window.location.href = "paginaAluno.html";
    }
}

function Cadastrar() {
    let nome = document.getElementById("txtNome").value;
    let tipo = document.getElementById("tipoUsuario").value;
    let senha = document.getElementById("senha").value;

    if (!nome || tipo === "Escolha o tipo de usuário" || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Usuário criado!");
    window.location.href = "login.html";
}