document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const controls = document.querySelectorAll('.control');

    const heroSection = document.querySelectorAll('.hero');
    const alturaHero = heroSection.clientHeight;

    //exibir/ocultar background-color do header
    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > 80) {
            exibeBackgroundHeader();
        }

        else {
            ocultaBackgroundHeader();
        }
    }) //FIM exibir/ocultar background-color do header

    // INICIO Esmaecer background
    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > 50) {
            esmaecerBackgroundOff1();
        }

        if (posicaoAtual > 170) {
            esmaecerBackgroundOff2();
        }

        if (posicaoAtual < 49) {
            esmaecerOffBackground1()
        }

        if (posicaoAtual < 169) {
            esmaecerOffBackground2()
        }
    }) // FIM Esmaecer background



    // INICIO Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const soma = i == 1 || i == 2;

            if (soma == true) {
                const abaAlvo = botao.target.dataset.tabButton;
                const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
                escondeTodasAbas();
                escondeAbaTeste();
                aba.classList.add('shows__list--is-active');
                removeBotaoAtivo();
                removeBotaoTeste();
                botao.target.classList.add('shows__tabs__button--is-active');
            }

            else {
                const abaAlvo = botao.target.dataset.tabButton;
                const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
                escondeTodasAbas()
                removeBotaoAtivo()
                aba.classList.add('shows__list--is-teste');
                botao.target.classList.add('shows__tabs__button--is-teste');
            }
        })
    }//FIM Seção de atrações

    let currentItem = 0;
    const items = document.querySelectorAll('.items');
    const maxItems = items.length;
    console.log(maxItems);

    controls.forEach((control) => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains("arrow-left");
            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem +=1;
            }

            if (currentItem >= maxItems){
                currentItem = maxItems - 1;
            }

            if (currentItem < 0) {
                currentItem = 0;
            }

            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
            })
        })
    })

})


// INICIO Seção esmaecer backgroud 
function esmaecerBackgroundOff1() {
    const esmaecer = document.querySelector('div');
    esmaecer.classList.add('esmaecer-1');
}

function esmaecerBackgroundOff2() {
    const esmaecer = document.querySelector('div');
    esmaecer.classList.add('esmaecer-2');
}

function esmaecerOffBackground1() {
    const esmaecer = document.querySelector('div');
    esmaecer.classList.remove('esmaecer-1');
}
function esmaecerOffBackground2() {
    const esmaecer = document.querySelector('div');
    esmaecer.classList.remove('esmaecer-2');
}
// FIM Seção esmaecer backgroud 


// INICIO Seção de exibição do background do header 
function exibeBackgroundHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--hidden');
}

function ocultaBackgroundHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--hidden');
}
// FIM Seção de exibição do background do header 



function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBotaoTeste() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-teste');
    }
}

function escondeAbaTeste() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-teste');
    }
}