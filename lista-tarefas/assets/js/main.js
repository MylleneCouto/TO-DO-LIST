const tarefas = document.querySelector(".tarefas");
const inputtarefa = document.querySelector(".input-tarefa");
const btntarefa = document.querySelector(".btn-tarefa")

inputtarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputtarefa.value) return;
    criaTarefas(inputtarefa.value);
  }
});

function criali(){

  const li = document.createElement("li");
  return li
}

function clearInput(){

  inputtarefa.value = "";
  inputtarefa.focus();
}

function criaBotaoApagar(li){

  li.innerText += " ";
  botaoapagar = document.createElement("button");
  botaoapagar.innerText = "Apagar";
  botaoapagar.setAttribute("class", "apagar")
  li.appendChild(botaoapagar);
}

function criaTarefas(textotarefa){

  li = criali();
  li.innerText = textotarefa;
  tarefas.appendChild(li);
  clearInput();
  criaBotaoApagar(li);

}

btntarefa.addEventListener("click", function(e){

  texto = inputtarefa.value;
  if (!texto) return
  criaTarefas(texto)
  
})

document.addEventListener("click", function(e){

  const el = e.target;

  if (el.classList.contains("apagar")){
    el.parentElement.remove();
  }
})