var chavePix = document.querySelector(".chavepix")
var avisoCopiado = document.querySelector(".copiado")

adicionarDataAtributo(chavePix, "chave", "deu certo")


chavePix.addEventListener("click", function () {
    copiarDataAtributo(chavePix, "data-chave").then((copiado) => {
        if (copiado) {
            avisoCopiado.classList.add("mostrar")
            
            setTimeout(() => {
                avisoCopiado.classList.remove("mostrar")
            }, 1000)
        }
    })
})


// Função para copiar o valor
function copiarDataAtributo(elemento, nomeAtributo) {
    let valorAtributo = elemento.getAttribute(nomeAtributo)
    
    return navigator.clipboard.writeText(valorAtributo)
        .then(() => true)
        .catch((err) => {
            console.error("Erro ao copiar:", err)
            return false
        })
}

// Função para criar e adicionar um data attribute
function adicionarDataAtributo(elemento, nomeAtributo, valor) {
    elemento.setAttribute(`data-${nomeAtributo}`, valor)
}