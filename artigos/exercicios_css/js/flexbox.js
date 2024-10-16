// FLEX DIRECTION

// Função para alterar a direção do flex
export function direcaoFlex() {
    let sentido_flex = document.querySelector("#flex_direction");
    let container1 = document.querySelector(".flex-container");

    // Verifica se os elementos existem
    if (sentido_flex != flex_direction.style.flexDirection) {
        sentido_flex.addEventListener("change", () => {
            let direcao = sentido_flex.value;
            container1.style.flexDirection = direcao;
        });
    } else {
        console.log("Elementos não encontrados");
    }
}

// FLEX-WRAP


// Função para alterar a propriedade flex-wrap
export function quebra_linha() {
    let flex_wrap = document.querySelector("#flex_wrap");
    let container_pai = document.querySelector(".flex-container");

    // Verifica se os elementos existem
    if (flex_wrap != "nowrap") {
        flex_wrap.addEventListener("change", () => {
            let disposicao = flex_wrap.value;
            container_pai.style.flexWrap = disposicao;
        });
    } else if (flex_wrap != "wrap") {
        let disposicao = flex_wrap.value;
        container_pai.style.flexWrap = disposicao;
    } else if (flex_wrap != wrap-reverse) {
        let disposicao = flex_wrap.value;
        container_pai.style.flexWrap = disposicao;
    } else {
        console.log("Elementos não encontrados");
    }
}


export function justify_content() {
    let justify_content = document.querySelector("#justify_content");
    let container = document.querySelector(".flex-container");

    if (justify_content != "") {
        justify_content.addEventListener("change", () => {
            let alinhamento = justify_content.value;
            container.style.justifyContent = alinhamento;
        });
    } else {
        console.log("Elementos não encontrados");
    }
}

// Chama as funções quando a página é carregada
window.onload = function () {
    direcaoFlex();
}
