# Projeto Prático - API de lista de tarefas :computer:

Projeto Prático desenvolvido em API na 7ª semana do Bootcamp Backend da {reprograma} 

Objetivo projeto======
Exibir via API uma lista de tarefas com rotas para lista por ID, nome colaborador e por data de início do projeto.

Tecnologias usadas------

Para desenvolver o projeto utilizei a tecnologia Node.js. O download do Node é feito neste [link](https://nodejs.org/en/). A instalação é feita pelo procedimento padrão de instalação (next => next => ok). Para o download dos pacotes, utilizei o npm, porém você pode usar o gerenciador de pacotes de sua preferência.

Instalação------

Para clonar este repositório você deverá acessar o git bash (Windows) ou terminal (Linux, MAC) e digitar o seguinte comando:
- [git clone](https://github.com/tatianimeneghini/n3_Backend_ProjetoPratico.git)

Após clonar o repositório e acessar o novo diretório criado, você deverá iniciar o node pelo comando (caso utilize o NPM):
- npm install 
Se você está utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.

Endpoints utilizados------

Os endpoints criados foram os seguintes:

- GET /:id - Exibe os dados de acordo com o ID inserido.

- GET / -Exibe as tarefas incluídas.

- GET tarefas/concluidos/filtrar - Exibe apenas as tarefas concluídas.

- GET tarefas/:nome/buscar - Exibe apenas os dados do nome filtrado.

- GET tarefas/dataInclusao/filtrar - Ordena a exibição de acordo com as datas mais recentes.

- GET tarefas/concluidos/duracaoTarefa - Exibe a duração em dias da tarefa caso a mesma tenha sido concluída.
