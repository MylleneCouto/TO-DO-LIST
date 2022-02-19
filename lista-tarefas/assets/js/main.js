const tarefas = document.querySelector(".tarefas");
const inputtarefa = document.querySelector(".input-tarefa");
const btntarefa = document.querySelector(".btn-tarefa")
i = 0;

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

  botaoapagar = document.createElement("div");
  botaoapagar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  botaoapagar.setAttribute("class", "apagar")
  botaoapagar.onclick = function(e){
    
    const el = e.target;
    
   if (e.target.matches('.apagar') || e.target.parentNode.matches('.apagar')){

    el.closest("li").setAttribute("class","tarefa-removida");
    setTimeout(function(){
      el.closest("li").remove();
    }, 200);

    }

  };

  li.appendChild(botaoapagar);
}



function criaTarefas(textotarefa){
  i += 1
  li = criali();
  li.innerHTML = `<div class='texto-tarefa'><input class='check' type="checkbox" id="${i}" name="${i}">
  <label for='${i}'>${textotarefa}</label></div>`;
  li.setAttribute("class","nova-tarefa");
  setTimeout(function(){
    tarefas.appendChild(li);
  }, 10);

  criaBotaoApagar(li);
  clearInput();


}

btntarefa.addEventListener("click", function(e){

  texto = inputtarefa.value;
  if (!texto) return
  criaTarefas(texto)
  
})

function apagar (){

  const el = e.target;

  if (el.classList.contains("apagar")){
    el.parentElement.remove();
  }
}