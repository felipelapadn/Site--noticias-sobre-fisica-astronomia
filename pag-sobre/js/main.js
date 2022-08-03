const botao = document.querySelector("button");
const sectionbg = document.querySelector("#sec");
let validador = 0;

botao.addEventListener('click', function(){
    const imagem = document.querySelector('#img-div');

    if(validador){
        sectionbg.style.background = '#02020D';
        sectionbg.style.color = "#FFFFFF";
        imagem.setAttribute("src", "../assets/img/logo_desenho.svg");
        botao.style.background = '#02020D';
        validador = 0;
    }
    else{
        sectionbg.style.background = '#FFFFFF';
        sectionbg.style.color = "#02020D";
        imagem.setAttribute("src", "../assets/img/logo_desenho_preta.svg");
        botao.style.background = '#FFFFFF';
        validador = 1;
    }

});

