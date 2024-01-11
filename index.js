var setaesquerda = window.document.getElementById("setaesquerda")
var setadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")


function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex; margin-right:190px"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:60px; margin-left:100px"
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex; margin-top:55%"
    setaesquerda.style = "display:none"
}