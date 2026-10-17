
# Painel de Notas

## Sobre o projeto

O **Painel de Notas** é um projeto desenvolvido para a disciplina de Desenvolvimento Web, com o objetivo de praticar os conceitos iniciais de JavaScript ES6 e a criação de interfaces responsivas utilizando Bootstrap 5.

O projeto apresenta notas de avaliações, média final e a situação acadêmica de um aluno.

## Tecnologias utilizadas

- HTML5
- Bootstrap 5
- JavaScript

## Estrutura do projeto

```text
atividade-js-bootstrap/
├── index.html
├── script.js
└── README.md
```

## Interface desenvolvida

A interface foi desenvolvida utilizando Bootstrap 5 via CDN.

Ela apresenta:
- Barra de navegação com o nome do projeto;
- Seção de apresentação;
- Três cards com notas e média final;
- Badge indicando aprovação;
- Alert informando a média mínima;
- Botão visual;
- Rodapé com informações do projeto.

### Componentes Bootstrap utilizados

| Componente | Finalidade |
|------------|------------|
| `navbar` | Barra de navegação |
| `container` | Centralização do conteúdo |
| `row` | Organização em linhas |
| `col-md-4` | Colunas responsivas |
| `card` | Exibição das notas |
| `badge` | Indicação de aprovação |
| `alert` | Mensagem informativa |
| `btn` | Estilização do botão |
| `footer` | Rodapé da página |

## Conceitos de JavaScript

### Variáveis: const, let e var

**const:** Utilizei const para armazenar informações que não precisariam receber novos valores durante a execução, como o nome do aluno e a disciplina.

**let:** Utilizei let para armazenar as notas, pois elas poderiam ser corrigidas posteriormente. Dessa forma, consigo alterar o valor da variável sem precisar declará-la novamente.

**var:** Era muito utilizado antes do JavaScript ES6. Permite reatribuir e redeclarar variáveis no mesmo escopo e possui escopo de função, e não de bloco. Além disso, seu comportamento de hoisting pode gerar resultados inesperados. Atualmente, damos preferência a const para variáveis que não serão reatribuídas e a let quando precisamos alterar seu valor.


### Tipos de dados

Os tipos de dados utilizados foram:

- **String:** textos, como o nome do aluno e da disciplina.
- **Number:** valores numéricos, como as notas.
- **Boolean:** valores verdadeiros ou falsos.
- **Null:** ausência intencional de um valor.

### Operadores matemáticos

Foram utilizados os operadores:

- Adição (`+`)
- Subtração (`-`)
- Multiplicação (`*`)
- Divisão (`/`)
- Comparação (`>=`)

### Estrutura condicional if/else

Na estrutura if/else para saber se o aluno foi aprovado ou não, declarei a mediaMin para saber qual é a media minima para o aluno passar logo pego a mediaNota que é a media da nota1 e nota2 do aluno se ela for maior ou igual a mediaMin o aluno esta aprovado, agora se for menor o projeto retorna que o aluno não está aprovado e traz a quantiade de pontos que o aluno precisa ter pra passar.

## Desafio integrador

O desafio integrador realiza o cálculo da média de duas avaliações.

Também calcula a diferença entre a média obtida e a média mínima necessária para aprovação.

O JavaScript utiliza uma estrutura condicional `if/else` para verificar a situação acadêmica do aluno e apresentar o resultado no Console do navegador.

## Dificuldades encontradas

Durante o projeto não tive nenhuma dificuldade relacionado ao JS.
Agora durante o frontend... algumas duvidas relacionada a utilização do bootstrap.
Uma dificuldade com questão de uma responsividade referente ao footer que estava sendo puxado para o meio da pagina.
sinceramente, ainda fiquei com um pouco de dificuldade no entendimento, consegui resolver porem com algumas duvidas ainda.

## Como as dificuldades foram resolvidas

Utilização de IA para explicação de alguns contextos que não entendi, junto com a própria leitura da documentação do bootstrap.



## Autor

**Nome:** Gabriel Andrade

**RGM:** 114.073

**Disciplina:** Desenvolvimento Web e mobile 1