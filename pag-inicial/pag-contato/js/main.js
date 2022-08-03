const formResult = document.querySelector("form");
const foot = document.querySelector("#footer");
const footA = document.querySelector("#mensagem-footer");

formResult.addEventListener('submit', function(evento){
    evento.preventDefault();
    const el = evento.target;
    const sobrenome = el.querySelector("#sobrenome").value;
    const nome = el.querySelector("#primeiro-nome").value;
    const email = el.querySelector("#email").value;
    const mensagem = el.querySelector("#mensagem").value;
    const msg = `Senhor ${sobrenome}, sua mensagem foi enviada aos comandantes!`;

    if(!sobrenome || !nome || !email || !mensagem) {
        setResultado("Está faltando algo...");
        foot.style.background = '#02020D';
        footA.style.color = '#FFFFFF';
        return;
    }
    setResultado(msg);
    foot.style.background = '#02020D';
    footA.style.color = '#FFFFFF';
});

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg) {
    const menEnviada = document.querySelector('#mensagemEnviada');
    const p = criaP();
    menEnviada.innerHTML = '';
    p.classList.add('mensagem-form');
    p.innerHTML = msg;
    menEnviada.appendChild(p);
}
