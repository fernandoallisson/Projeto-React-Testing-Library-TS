# :construction: Projeto React Testing Library Typescript :construction:
Este projeto consiste em um conjunto de testes unitários e de integração para uma aplicação React que simula uma Pokédex, uma enciclopédia virtual de Pokémon. A Pokédex exibe informações detalhadas sobre os Pokémon, como descrições, tipos, localizações e permite ao usuário favoritar os Pokémon de sua escolha.

## Componentes Principais (construídos pela Trybe): 

### App: 
Componente principal da aplicação, que define as rotas e a estrutura da interface.

### About: 
Página que fornece informações gerais sobre a Pokédex, como uma descrição e detalhes sobre seu funcionamento.

### FavoritePokemon: 
Página que exibe os Pokémon favoritados pelo usuário.

### NotFound: 
Página exibida quando uma rota não é encontrada.

### Pokedex: 
Página principal da Pokédex, que exibe os Pokémon encontrados, permite a navegação entre eles e filtros por tipo.

### PokemonDetails:
 Página que exibe informações detalhadas sobre um Pokémon específico, incluindo descrição, locais de encontro e opção de favoritar.

### Testes Realizados (Construídos por Fernando Álisson (eu)):

### Testes do Componente About: 
Verifica se a página About contém as informações corretas sobre a Pokédex, incluindo descrição e título.

### Testes do Componente App: 
Verifica se a barra de navegação contém os links corretos para as páginas principais da aplicação e se a navegação entre as páginas funciona corretamente.

### Testes do Componente FavoritePokemon: 
Verifica se a página exibe corretamente a mensagem quando não há Pokémon favoritados e se os Pokémon favoritados são exibidos corretamente.

### Testes do Componente NotFound: 
Verifica se a página Not Found é exibida corretamente quando uma rota desconhecida é acessada.

### Testes do Componente Pokedex: 
Verifica se a página contém o título correto, se apenas um Pokémon é mostrado por vez, se a navegação entre os Pokémon funciona corretamente, se os botões de filtro por tipo estão presentes e se o filtro por tipo funciona corretamente.

### Testes do Componente PokemonDetails: 
Verifica se as informações detalhadas do Pokémon selecionado são exibidas corretamente, se as informações de localização são exibidas corretamente e se a opção de favoritar um Pokémon funciona corretamente.

## Tecnologias Utilizadas:

### React Testing Library: 
Biblioteca para escrever testes para componentes React.
### Jest: 
Framework de teste para JavaScript.
### MemoryRouter: 
Componente de roteamento para testes que simula o roteador sem interferir na navegação real.
## Objetivo do Projeto:

O objetivo desses testes é garantir que a aplicação funcione conforme o esperado em diferentes cenários e condições, garantindo a qualidade e a confiabilidade do código. Os testes abrangem desde a navegação entre páginas até a exibição correta das informações detalhadas de cada Pokémon, garantindo uma experiência consistente para o usuário final.