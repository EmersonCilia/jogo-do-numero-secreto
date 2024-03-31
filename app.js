let listaDeNumerosSorteados = [];
let numeroMaximo = parseInt(10);
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
const myInput = document.querySelector(".container__input").setAttribute('max', numeroMaximo);;
MensagemInicial();

function exibeTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function MensagemInicial(){
    exibeTextoNaTela('h1', 'Jogo do número secreto');
    exibeTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibeTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibeTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        let maiorMenor = chute > numeroSecreto ? 'menor' : 'maior';
            exibeTextoNaTela('h1', `o numero secreto é ${maiorMenor} que ${chute}`);

            tentativas ++;

            limparCampo();
    }
}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value= '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    MensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

