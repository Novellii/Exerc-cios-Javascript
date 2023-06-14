// ------------------------------------------------------------------------------- //

// Aqui há o verificador de número primo //

// Função que verifica se é um número primo, caso seja maior que 1, ele será considerado //

function verificarNumeroPrimo(primoNumero) {
  if (primoNumero <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(primoNumero); i++) {
    if (primoNumero % i === 0) {
      return false;
    }
  }
  return true;
}

// Função que verifica se é, ou não é, um número primo, em cada caso será avisado. //

function numeroprimo() {
  var primoNumero = prompt("Escreva um número")
  if (verificarNumeroPrimo(primoNumero)) {
    alert(primoNumero + " é um número primo.");
  } else {
    alert(primoNumero + " não é um número primo.");
  }
}

// ------------------------------------------------------------------------------- //


// Aqui há a reversor de string //

// Esta é a função reverter string //
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Utiliza o reverter string //
function reverterString() {
  var verificador = prompt("Digite uma palavra")
  var palRevertida = reverseString(verificador)
  alert("A palavra revertira é " + palRevertida);
}

// ------------------------------------------------------------------------------- //

// Função de checar o maior elemento //

// Pede três elementos, e então compara com a função Math.max //
function maiorElemento() {
  var elemento1 = prompt("Escreva um número")
  var elemento2 = prompt("Escreva mais um número")
  var elemento3 = prompt("Escreva novamente um número")
  var elemento4 = prompt("Escreva um último número")
  var maiorElemento = Math.max(elemento1, elemento2, elemento3, elemento4)
  alert("O maior número é " + maiorElemento)
}

// ------------------------------------------------------------------------------- //

// Função de checar o maior, o menor elemento e a média //

// Pede três elementos, e então compara com a função Math.max //
function maimenmedElemento() {
  var elemento1 = parseFloat(prompt("Escreva um número"));
  var elemento2 = parseFloat(prompt("Escreva mais um número"));
  var elemento3 = parseFloat(prompt("Escreva novamente um número"));
  var elemento4 = parseFloat(prompt("Escreva um último número"));

  var maioElemento = Math.max(elemento1, elemento2, elemento3, elemento4)
  alert("O maior número é " + maioElemento)
  var menorElemento = Math.min(elemento1, elemento2, elemento3, elemento4)
  alert("O menor número é " + menorElemento)
  var somaElementos = elemento1 + elemento2 + elemento3 + elemento4;
  var mediaElementos = somaElementos / 4;
  alert("A média dos elementos é " + mediaElementos);
}

// ------------------------------------------------------------------------------- //

// Contador de frequência, eu sinceramente não entendi como posso explicar isso. //

function contarFrequenciaElementos() {
  var vetor = [];
  var frequencia = {};
  var input = prompt("Insira os números do vetor separados por vírgula:");
  vetor = input.split(",").map(function (elemento) {
    return parseFloat(elemento.trim());
  });

  for (var i = 0; i < vetor.length; i++) {
    var elemento = vetor[i];
    if (frequencia[elemento]) {
      frequencia[elemento]++;
    } else {
      frequencia[elemento] = 1;
    }
  }
  return frequencia;
}

function mostrarElementos() {
  var frequenciaElementos = contarFrequenciaElementos();
  var frequenciaString = "";
  for (var elemento in frequenciaElementos) {
    frequenciaString += "Elemento: " + elemento + " - Frequência: " + frequenciaElementos[elemento] + "\n";
  }
  alert("Frequência dos elementos:\n" + frequenciaString);
}

// ------------------------------------------------------------------------------- //

// Aqui há o verificador de Senhas //

// Inicialmente é verificado se o tamanho da senha é maior que 8 //
function funçãoSenha(senha) {
  if (senha.length < 8) {
    return false;
  }
  //Depois, é criado três variáveis para verificar maiúscula, minúscula e numero //
  var temMaiuscula = false;
  var temMinuscula = false;
  var temNumero = false;

  for (var i = 0; i < senha.length; i++) {
    var caractere = senha.charAt(i);

    if (caractere >= "A" && caractere <= "Z") {
      temMaiuscula = true;
    } else if (caractere >= "a" && caractere <= "z") {
      temMinuscula = true;
    } else if (!isNaN(caractere)) {
      temNumero = true;
    }
  }

  // Utilizando a matéria do Alessandro, é verificado se todas as três variáveis são verdadeiras. //

  return temMaiuscula && temMinuscula && temNumero;
}

// Se for tudo true, a senha é aceita, se algum for false, ou todos forem, a senha é rejeitada //

function senhaVerificar() {
  var senhaInserida = prompt("Digite uma senha:");
  var senhaDigitada = funçãoSenha(senhaInserida);
  if (senhaDigitada == false) {
    alert("Senha Rejeitada")
  }
  if (senhaDigitada == true) {
    alert("Senha Aceita")
  }
}

// ------------------------------------------------------------------------------- //

// Aqui há o contador de Vogais //

// Esta é a função contarVogais, ao começar a escrever a palavra, não há nenhuma vogal, depois será verificado as vogais com acento //
function contarVogais(palavra) {
  var contadorVogais = 0;
  var vogais = ['a', 'e', 'i', 'o', 'u', 'ê', 'á', 'é', 'í', 'ó', 'ú', 'ã', 'õ', 'â', 'ê', 'ô'];
  // Começa a verificação de vogais com acento, onde se adiciona 1 no valor das vogais //
  for (var i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
      contadorVogais++;
    }
  }
  // Retorna a função //
  return contadorVogais;
}

// Executa a função ao digitar uma palavra //
function verificarPalavra() {
  var palavraInserida = prompt("Digite uma palavra:");
  var numVogais = contarVogais(palavraInserida);
  alert("A palavra '" + palavraInserida + "' tem " + numVogais + " vogais.");
}

// ------------------------------------------------------------------------------- //

// Aqui há o conversor de Temperatura //

// Esta é a função de converter a temperatura em Celsius para Fahrenheit //
function reversorTemperatura(Celsius) {
  var fahrenheit = (Celsius * 9 / 5) + 32;
  return fahrenheit;
}

// Retorna a Função, mostrando uma cor. //
function inserirTemperatura() {
  var celsiusFahrenheit = prompt("Escreva uma temperatura em Celcius")
  var temperaturaFinal = reversorTemperatura(celsiusFahrenheit)
  alert("A temperatura em Fahrenheit é " + temperaturaFinal);
}

// ------------------------------------------------------------------------------- //

// Aqui há o gerador de cor aleatória //

// Função de gerar cor aleatória, primeiramente o fundo e depois o texo. //

function gerarCorAleatoria() {
  var redFundo = Math.floor(Math.random() * 256);
  var greenFundo = Math.floor(Math.random() * 256);
  var blueFundo = Math.floor(Math.random() * 256);
  var corFundo = "rgb(" + redFundo + ", " + greenFundo + ", " + blueFundo + ")";

  var redTexto = Math.floor(Math.random() * 256);
  var greenTexto = Math.floor(Math.random() * 256);
  var blueTexto = Math.floor(Math.random() * 256);
  var corTexto = "rgb(" + redTexto + ", " + greenTexto + ", " + blueTexto + ")";

  // Utiliza as cores geradas e aplica no documento //

  document.getElementById("button").style.background = corFundo
  document.getElementById("button").style.color = corTexto
}

// Questão 7 //

function removerDuplicados(matriz) {
  var conjunto = new Set(matriz);
  var matrizSemDuplicados = [...conjunto];
  return matrizSemDuplicados;
}

// Questão 8 // 

function verificarPalindromo(string) {
  // Remover espaços em branco e converter para letras minúsculas
  var stringFormatada = string.toLowerCase().replace(/\s/g, '');

  // Inverter a string
  var stringInvertida = stringFormatada.split('').reverse().join('');

  // Verificar se a string original é igual à string invertida
  return stringFormatada === stringInvertida;
}

// Questão 9 //

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  var resultado = 1;

  for (var i = 2; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

// Questão 10 //

function verificarAnagrama(palavra1, palavra2) {
  // Remover espaços em branco e converter para letras minúsculas
  var palavraFormatada1 = palavra1.toLowerCase().replace(/\s/g, '');
  var palavraFormatada2 = palavra2.toLowerCase().replace(/\s/g, '');

  // Verificar se as palavras têm o mesmo comprimento
  if (palavraFormatada1.length !== palavraFormatada2.length) {
    return false;
  }

  // Ordenar as letras das palavras em ordem alfabética
  var letrasOrdenadas1 = palavraFormatada1.split('').sort().join('');
  var letrasOrdenadas2 = palavraFormatada2.split('').sort().join('');

  // Verificar se as palavras ordenadas são iguais
  return letrasOrdenadas1 === letrasOrdenadas2;
}

// Questão 12 //

function verificarQuadradoPerfeito(numero) {
  var raiz = Math.sqrt(numero);

  return raiz % 1 === 0;
}

// Exemplo de uso da função
var numero1 = 9;
var numero2 = 16;
var numero3 = 25;

console.log(verificarQuadradoPerfeito(numero1)); // true
console.log(verificarQuadradoPerfeito(numero2)); // true
console.log(verificarQuadradoPerfeito(numero3)); // true

// Questão 14 //

function verificarPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function verificarFibonacci(numero) {
  var a = 0;
  var b = 1;

  while (b < numero) {
    var temp = b;
    b = a + b;
    a = temp;
  }

  return b === numero;
}

function verificarNumeroPrimoDeFibonacci(numero) {
  return verificarPrimo(numero) && verificarFibonacci(numero);
}

