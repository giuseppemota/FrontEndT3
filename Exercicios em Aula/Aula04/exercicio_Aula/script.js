class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
    }


}
const botao = document.querySelector("button");
let texto = document.querySelector("input");
botao.addEventListener("click", adicionaTarefaDOM);
function adicionaTarefaDOM() {

    let ul = document.getElementById("listaTarefas");
    let li = document.createElement("li");
    li.textContent = texto.value;
    ul.appendChild(li);
}


function TarefaNoStorage() {
    let tarefas = JSON.parse(localStorage.getItem("tarefas"));
    tarefas.push(this.descricao);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

