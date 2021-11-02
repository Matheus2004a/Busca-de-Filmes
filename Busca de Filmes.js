function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value//Tirando as tags do HTML e exibindo apenas o há escrito dentro do campo de endereço da imagem

  //Se a variável filmeFavorito for do tipo texto e terminar com outro texto que tenha a extensão .jpg
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  }
  //Se terminar com outro tipo de extensão (que não seja .jpg), o filme não é exibido
  else {
    alert("Imagem não encontrada! Digite apenas imagens que tenham o link com a extensão .jpg/ Exemplo: https://m.media-amazon.com/images/M/MV5BMTk0NzcxMjYwNF5BMl5BanBnXkFtZTcwMTI4MTIxMw@@._V1_UX182_CR0,0,182,268_AL_.jpg")
  }

  campoFilmeFavorito.value = ""
}

//Listando os filmes na tela
function listarFilmesNaTela(filme) {
  var listarFilmes = document.querySelector('#listarFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
}

const btnRetornaTopo = document.querySelector('.return-topo')
window.addEventListener("scroll", () => {
  scrollY >= 450 ? btnRetornaTopo.classList.add("show") : btnRetornaTopo.classList.remove("show")
})