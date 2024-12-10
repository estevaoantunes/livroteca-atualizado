# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

Nesta seção do documento, foi explorado especificações detalhadas do projeto
LivroTeca para apresentar uma compreensão profunda dos usuários finais. Isso foi
alcançado através de três abordagens interligadas: o desenvolvimento das descrições
fictícias descritas pelas personas, a descrição curta e simples da utilização de histórias de
usuários e por fim, a definição precisa das especificações e requisitos que a plataforma
deve propor.

## Personas

Nome: Ana Souza

Idade: 25

Profissão: Analista de Marketing Digital

Objetivo Profissional: Abrir a sua própria agência de marketing digital e trabalhar de forma
remota.

Personalidade: Ana é curiosa e organizada, sempre buscando maneiras de aproveitar
melhor o seu tempo livre.

Interesses e Hobbies: Ana gosta de ler livros, assistir séries e cantar em seu tempo livre.
Ela utiliza seu smartphone e e-reader para ler, seja em sua casa, na sua cafeteria preferida,
ou durante suas viagens dentro do metrô.

Necessidades: Ela quer descobrir novos interesses literários de forma mais prática e
eficiente do que apenas pesquisando no Google, onde também possa encontrar sinopse
confiáveis e compartilhar suas opiniões com outras pessoas do mesmo gosto.

Motivações: Ana quer encontrar uma plataforma que tenha ferramentas que ajudem a
otimizar o seu tempo, oferecendo experiência intuitiva e personalizada, ajudando-a a
explorar novos conteúdos literários dentro de sua área de interesse

|---------------------------------------------------------------------------------------------------|

Nome: Pedro Martins.

Idade: 25.
Profissão: Autor Independente.

Objetivo Principal: Alcançar visibilidade como um autor independente que escreve conto
de romance.

Personalidade: É uma pessoa criativa, perseverante e comunicativa.

Interesses e Hobbies: Pedro adora escrever contos de romance e buscar inspiração lendo
livros e outras mídias. Ele escreve e divulga suas obras em casa, em parques ou na sua
lanchonete preferida, usando seu laptop. Além de escrever, ele valoriza o contato que tem
com o pouco público que tem, além de que no seu tempo livre, ele gosta relaxar através da
leitura de seus autores inspiradores.

Necessidades: Ele quer divulgar suas obras e ampliar a sua visibilidade por um só lugar,
onde possa receber feedbacks que o ajudem a crescer profissionalmente e pessoalmente,
além de poder ter uma interação com seus leitores e comunidade de uma forma prática.
Motivações:Encontrar uma plataforma que tenha ferramentas facilitadoras de divulgação e
organização de descoberta de novas obras

|-----------------------------------------------------------------------------------------------|

Nome: Mariana Silva.

Idade: 42.

Profissão: Professora de História.
Objetivo Principal: Ajudar seus alunos a desenvolverem o hábito de leitura crítica e
reflexão, usando livros e conteúdos que complementam suas aulas. Mariana dedica a
proporcionar uma educação que vá além da sala de aula, incentivando a curiosidade
intelectual em seus alunos.

Personalidade: Dedicada, atenciosa, apaixonada em dar aula.
Interesses e Hobbies: Mariana tem uma biblioteca física pessoal em casa com livros de
diversas áreas de história e filosofia. Ela gosta de ler diversos temas relacionados, assistir
documentários e escrever artigos educacionais para seus estudantes. O seu interesse em
livros é tão grande que ela gosta de recomendá-los para seus alunos fora de aula.
Necessidades: Ela quer encontrar livros relevantes para suas aulas de história e filosofia,
além de poder recomendar leituras que ajudem seus estudantes e também poder expandir
seu próprio conhecimento como educadora.

Motivações: Encontrar uma plataforma que atenda a sua busca por livros novos e que
possa compartilhar em só lugar através de ferramentas de recomendação para seus alunos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                        |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|---------------------------------------------------------------|
|Leitor Ávido        | Criar minha biblioteca pessoal                            | Escolher minhas próximas leituras      |
|Leitor Casual       | Encontrar livros recomendados ao meu gosto                | Permitir que possam administrar contas |
|Autor Independente  | Compartilhar meu trabalho e me conectar com o meu público | Ganhar visibilidade, obter Feedbacks e |
|                                                                                | melhorar profissionalmente             |
|Professora          | Pesquisar livros adequados para meus alunos               | Recomendar em minhas aulas e ajudá-los a compreender | 
|Estudante           | Encontrar livros de estudos de matérias específicas       | Que eu possa estudar através da leitura|

## Requisitos

### Requisitos Funcionais

RF1: O sistema deve permitir que usuários cadastrem usando email ou telefone.

RF2: O sistema deve permitir criação de perfis personalizado, como nome, criação de bio, preferências literárias e criação de biblioteca pessoais.

RF3: O sistema deve fornecer um catálogo de livros com informações somo sinopses, resehas, gênero, autor e ano de publicação.

RF4: O sistema deve permitir pesquisas de acordo com seus interesses.

RF5: O sistema deve permitir que usuários criem resenhas e comentários sobre os livros.

RF6: O sistema deve permitir que usuários recomendem obras em seus perfis.

RF7: O sistema deve permitir que o usuário visualize o comentários feitos por outros usuários.

RF8: O sistema deve permitir cadastro manual de obras já publicadas 

RF9: O sistema deve permitir o cadastro manual de obras já públicadas

RF10: O sistema deve permitir que o usuário adicione obras a uma lista de literatura

RF11: O sistema deve permitir que o ousuário adicione obras a sua lista de desejos

### Requisitos não Funcionais

RNF1: A interface deve possuir um design de interface intuitiva e de fácil usabilidade

RNF2: A interface deve se adaptar a diversas telas

RNF3: As pesquisas de livros e os filtros de recomendações devem retornar resultados em um curto espaço de tempo

RNF4: A plataforma deve se manter rápida e eficiente no carregamento de páginas

RNF5: A interface deve oferecer experiência fluida com interação em tempo real sem atrasos ou falhas

RNF6: O sistema deve suportar armazenamento seguro de obras e dados de usuários, com backups regulares

RNF7: A plataforma deve se manter consistente ao máximo possivel em dispositivos de menor desempenho

RNF8: Sistema de login deve fornecer autenticação de códgio via e-mail, celular, ou por autenticação de terceiros a cada no acesso a um novo dispositivo

RF9: Garantir privacidade e controle sobre conteúdo exposto em perfil de forma privada

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Deve ser compatível com dispositivos móveis           |
|04| O foco do projeto se dá na tecnologias de frontend    |
|05| Não deve haver um número abundante de usuários em  fases de testes |  
|06| O design deve seguir os padroes de acessibilidade da web |
|07| As funcionalidades devem ser documentadas até a entrega final |
|08| Uso de bibliotecas e API's devem ser limitadas a versões estáveis e licenciadas gratuitamente |
|09| A equipe deve ser composta no máximo de 6 membros |
