function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value//Tirando as tags do HTML e exibindo apenas o há escrito dentro do campo de endereço da imagem
    
    //Se a variável filmeFavorito for do tipo texto e terminar com outro texto que tenha a extensão .jpg, ou seja, se o endereço digitado do filme no campo de "endereço de imagem" tiver extensão .jpg, o filme é exibido
    if (filmeFavorito.endsWith('.jpg')){
      listarFilmesNaTela(filmeFavorito)
    }
    //Se terminar com outro tipo de extensão (que não seja .jpg) de arquivos de imagens, o filme não é encontrado
    else{
      alert("Imagem não encontrada! Digite apenas imagens que tenham extensão .jpg/ Exemplo: https://m.media-amazon.com/images/M/MV5BMTk0NzcxMjYwNF5BMl5BanBnXkFtZTcwMTI4MTIxMw@@._V1_UX182_CR0,0,182,268_AL_.jpg")
    }
    //Atribui um valor 0 (null) para o campo de pesquisa de filme, como se fosse um efeito de "limpar" o quê é escrito dentro do campo de pesquisa para pesquisar o filme favorito
    campoFilmeFavorito.value = ""
  }
  
  function listarFilmesNaTela(filme){
    var listarFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
  }
