const btGenerate = document.querySelector(".btGenerate")
const hex = document.querySelector(".hex")


btGenerate.addEventListener("click", () => {
 //o math random gera um numero aleatório, 
 //o método toString com o argumento 16 mostra que quando o valor passar de 9 letras entre a e f serão utilizadas
 //Os argumentos de substring() representam os índices inicial e final que são 6 numeros após a virgula
 const randomColor = Math.random().toString(16).substring(2, 8)
 document.body.style.backgroundColor = "#" + randomColor
 hex.innerHTML = "#" + randomColor
})