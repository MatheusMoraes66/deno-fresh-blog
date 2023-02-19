---
title: Redux vs Context API
date: 2023-02-18
excerpt: Um bom jeito de aprender sobre
---

Uma duvida que tenho sempre é quando utilizar o Redux ou Context Api existem
grandes diferenças em quando utilizar um ou outro.

### Um pouco de Historia

No inicio do React nos tinhamos uma unica forma de passar informação.

O que acontecia era que precisavamos ter um componente correlacionados para que
o dado chegasse para outro componente, então se component A precisa-se enviar
algo para o component B ele primeiramente enviaria para o Component Pai e depois
o Component Pai enviaria para o componente B.

O problema disso é que se a estrutura ficar muito complexa teremos um codigo
muito amarrado .

Imaginando a seguinte situação acima onde temos muitos componentes, agora já
pensou nos niveis que precisamos acessar para enviar algo do componente F para o
Componente D, em questão de codigo isso se torna algo burro se estamos falando
de React, pois a ideia principal é melhorar a forma que construimos um codigo no
Front-End.

Então como até então não tinhamos nada Proprio do React, surgiu no mercado uma
Ferramenta chamada Redux.

### O que é Redux?

Redux é uma Ferramenta que não é exclusiva do React e permite que você faça com
que seu estados sejam universais ou seja que todos possam acessar as
informações.

Então nosso redux incapsula nossos components permitindo que eles tenham acesso
a toda informação salva neles.

### O que é ContextAPI?

Bom depois de um tempo o time do React elaborou uma forma de criar um
gerenciador de estados Global, que fosse simples de utilizar e assim nasceu o
Context.

Ele possui algumas familiaridades com o Redux mas ele possui uma simplicidade
unica e ganhou fama assim que os famosos Hooks ganharam espaço.

### Mas então qual é a diferença?

Temos aqui então o que divide as aguas, Redux possui uma estrutura muito mais
complexa tem mais camadas em sua contrução, seguindo o Modelo do Facebook o
famoso Flux.

Essa é a estrutura criada pelo Facebook para fazer a interação, substituindo o
tradicional MVC, em Redux essas camadas são criadas o que permite maior
complexidade na hora de criar estados globais. Ao contrario do Context que
possui uma camada mais simples.
