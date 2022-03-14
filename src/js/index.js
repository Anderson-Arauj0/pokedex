/*
quando clicar no pokemons da listagem, temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos:
1 - listagem
2 - cartão do pokemon

precisamos salvar duas variaveis JS para trabalhar com os elmeentos da tela

vamos precisar trabalhar com o evento de clique feito pelo usuario na listagem de pokemons

-remover a classe aberto só do cartão que esta aberto 
-ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokemon selecionado
-adicionar a classe ativo no item sa lista selecionado
*/


// precisamos salvar duas variaveis JS para trabalhar com os elmeentos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')  


listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com o evento de clique feito pelo usuario na listagem de pokemons
    pokemon.addEventListener('click', () => {
        //-remover a classe aberto só do cartão que esta aberto  
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //-ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value  

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // -remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem =document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // -adicionar a classe ativo no item sa lista selecionado
        const pokemonSelecionadoNaListagem =document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
    })
})
    


