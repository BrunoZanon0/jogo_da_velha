
let b1 = document.querySelector(".botao1").addEventListener("click", inserir, checarResultado),
    b2 = document.querySelector(".botao2").addEventListener("click", inserir, checarResultado),
    b3 = document.querySelector(".botao3").addEventListener("click", inserir, checarResultado),
    b4 = document.querySelector(".botao4").addEventListener("click", inserir, checarResultado),
    b5 = document.querySelector(".botao5").addEventListener("click", inserir, checarResultado),
    b6 = document.querySelector(".botao6").addEventListener("click", inserir, checarResultado),
    b7 = document.querySelector(".botao7").addEventListener("click", inserir, checarResultado),
    b8 = document.querySelector(".botao8").addEventListener("click", inserir, checarResultado),
    b9 = document.querySelector(".botao9").addEventListener("click", inserir, checarResultado);

let b10 = document.querySelector(".botao1"),
    b20 = document.querySelector(".botao2"),
    b30 = document.querySelector(".botao3"),
    b40 = document.querySelector(".botao4"),
    b50 = document.querySelector(".botao5"),
    b60 = document.querySelector(".botao6"),
    b70 = document.querySelector(".botao7"),
    b80 = document.querySelector(".botao8"),
    b90 = document.querySelector(".botao9");

let resetar = document.querySelector(".resetar");

let jogadorAtual = "X"; // Inicialmente, o jogador 'X' é o ativo

function inserir(indice) {
  let elemento = indice.target;
  let valorInicial = elemento.innerHTML || elemento.value;
  if (valorInicial === "-") {
    elemento.innerHTML = jogadorAtual;
    jogadorAtual = jogadorAtual === "X" ? "O" : "X"; // Alterna para o próximo jogador
    checarResultado(); // Chama a função antes de ela iniciar quando ganha
  }
}

resetar.addEventListener("click", zerando);

function zerando() {
  for (let i = 1; i <= 9; i++) {
    document.querySelector(".botao" + i).innerHTML = "-";
  }
  jogadorAtual = "X";
}

function checarResultado() {
  let placarX = document.querySelector(".placarX");
  let placarO = document.querySelector(".placarO");
  let novoplacarX = parseInt(placarX.innerHTML);
  let novoplacarO = parseInt(placarO.innerHTML);
  if (
    (b10.innerHTML === "X" && b20.innerHTML === "X" && b30.innerHTML === "X") ||
    (b40.innerHTML === "X" && b50.innerHTML === "X" && b60.innerHTML === "X") ||
    (b70.innerHTML === "X" && b80.innerHTML === "X" && b90.innerHTML === "X") ||
    (b10.innerHTML === "X" && b40.innerHTML === "X" && b70.innerHTML === "X") ||
    (b20.innerHTML === "X" && b50.innerHTML === "X" && b80.innerHTML === "X") ||
    (b30.innerHTML === "X" && b60.innerHTML === "X" && b90.innerHTML === "X") ||
    (b10.innerHTML === "X" && b50.innerHTML === "X" && b90.innerHTML === "X") ||
    (b30.innerHTML === "X" && b50.innerHTML === "X" && b70.innerHTML === "X")
  ) {
    zerando();
    document.querySelector(".placarX").innerHTML = novoplacarX + 1;   // Zera e depois que zerar adiciona +1 no valor do vencedor X
  }
  if (
    (b10.innerHTML === "O" && b20.innerHTML === "O" && b30.innerHTML === "O") ||
    (b40.innerHTML === "O" && b50.innerHTML === "O" && b60.innerHTML === "O") ||
    (b70.innerHTML === "O" && b80.innerHTML === "O" && b90.innerHTML === "O") ||
    (b10.innerHTML === "O" && b40.innerHTML === "O" && b70.innerHTML === "O") ||
    (b20.innerHTML === "O" && b50.innerHTML === "O" && b80.innerHTML === "O") ||
    (b30.innerHTML === "O" && b60.innerHTML === "O" && b90.innerHTML === "O") ||
    (b10.innerHTML === "O" && b50.innerHTML === "O" && b90.innerHTML === "O") ||
    (b30.innerHTML === "O" && b50.innerHTML === "O" && b70.innerHTML === "O")
  ) {
    zerando();
    document.querySelector(".placarO").innerHTML = novoplacarO + 1; // Zera e depois que zerar adiciona +1 no valor do vencedor O
  }
}

function zerarPlacar(){ // Função que zera os placares
  document.querySelector('.placarX').innerHTML = '0'
  document.querySelector('.placarO').innerHTML = '0'
}
