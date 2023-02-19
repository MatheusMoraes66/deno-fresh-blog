---
title: Teste de Software
date: 2023-02-19
excerpt: Uma das maiores benções do desenvolvimento moderno.
---

Sempre me deparei com vários desenvolvedores e YouTubers falando da importância
do TDD (Desenvolvimento Orientado a Teste), para começo de conversa achava isso
coisa boba e de nenhuma importância no processo pois considerava meu código
excelente e na medida do possível eficiente.

Mais quando entrei em um projeto onde tínhamos um código legado entendi da
importância de um código com teste, esse código ao qual eu me refiro foi um dos
mais horríveis ao qual eu trabalhei, ele tinha sido passado de mão em mão dentro
da empresa e parecia terra de ninguém, todo vez que eu alterava qualquer coisa
dava uma dor de cabeça pois erra normal alterar um canto e estragar outra
funcionalidade. Mesmo tendo um Teste na equipe não era possível garantir a
funcionalidade geral da aplicação, causando diversas salas de crises por erros
bobos.

Então após a entrada de desenvolvedores mais experientes na squad acordamos
adotar o padrão do TDD em nosso futuros desenvolvimentos, o detalhe é que eu
sabia muito pouco sobre esse processo, então vamos começar a estudar.

## Tipos de Teste

Apos entrar no mundo do teste me deparei com varias coisas, esse pensamento veio
de uma metodologia a margem do Agile, chamada XP, veio ai o TDD. Mais os teste
foram divididos em quatro diferentes tipos:

- Testes Unitários: São testes específicos de cada função ou método.
- Testes de Integração: Aqui testamos a integração com banco ou até mesmo com
  outras funcionalidades.
- Testes de Ponta a Ponta: Aqui testamos um ponto da aplicação como um todo.

￼ Então temos aqui a famosa pirâmide de testes, bom ela funciona como indicativo
de como os teste devem funcionar, tudo inicia pela base os testes unitários são
as base e deve ser em maioria pois garante que cada coisa funciona independente
de qualquer outra, depois vem os testes de Integração e por ultimo o teste ponta
a ponta. É interessante ressaltar que essa pirâmide não deve ser invertida pois
isso pode ser sinal de um problema que a base não está solida.

## Teste Unitarios

Esse tipo de teste é o mais comum para os Dev, ele é dividido em 3 etapas muito
importantes: ￼ Cada etapa auxilia no desenvolvimento, bolinha Vermelha significa
o erro então criamos um teste que vai falhar, a bolinha Verde seria consertar o
erro criado pelo teste e a bolinha Azul seria repensar para criar um novo teste
que falhe. Assim temos um siclo até que a funcionalidade esteja pronta.

Para auxiliar o desenvolvimento foi criado uma estrutura para auxiliar na
escrita do teste: ￼ O Triplo A são as 3 divisões que o código precisa conter
para um bom teste, Arrange são as configurações que são necessárias, Act é a
funcionalidade sendo executada e Assert é a checagem se o retorno foi bem
sucedido.

￼
