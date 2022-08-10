const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Não vou dizer nada, quer ir VAI!',
  'Um passo a frente e você não está mais no MESMO lugar',
  'DREAM of californicaton',
  'Cristopher Columbus is a damn blasted LIAR.',
  'E vou viver as coisas NOVAS, que também são boas',
  'Get up, stand up: stand up for YOUR rights!',
  'Mas saiba que eu estou em VOCÊ Mas você não está em mim',
  'Start me UP, i never stop!',
  'LEIA o livro Universo em desencanto',
  'tempo AMIGO seja legal',
  'tem gente que vai pra NUNCA mais',
  'Quem tem a força de saber que EXISTE',
  'Não se assuste pessoa se eu lhe disser que a VIDA é boa',
  'let it be, LET IT BE',
  'o papa é POP',
  'mas LOUCO é quem me diz, e não é feliz',
  'saber amar é SABER deixar alguém te amar',
  'a cada um cabe alegrias e a tristeza que VIER ',
  'ONE life you got to do what you should'
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite UMA palavra')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
