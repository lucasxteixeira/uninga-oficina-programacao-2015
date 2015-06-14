# Documento de Requisitos do Sistema X

## Objetivo

Este trabalho consiste no desenvolvimento de um sistema para gestão da Clínica Psicólogica da Uningá que padronize e facilite o controle das atividades realizadas, visando um melhor controle administrativo e mais agilidade na prestação dos serviços aos pacientes. Além disso, busca fornecer maior segurança e confiabilidade no tratamento das informações.

## Descrição do Sistema

Atualmente, todas as atividades da clínica psicológica da Uningá estão sendo realizadas de maneira manual. Com isso, surge a necessidade do desenvolvimento de um sistema de software para facilitar a forma como as atividades são realizadas. O sistema deve gerenciar as informações sobre as salas disponíveis e consultas psicológicas, de modo a padronizar as informações permitindo a geração de relatórios de maneira simples. As características, como: usabilidade, interatividade e integridade dos dados são importantes.

A clínica psicológica possui cinco salas de atendimento para a comunidade externa em que os estudantes de psicologia realizam o acompanhamento dos pacientes, cada consulta possui duração de uma hora, portanto, suportam um número limitado de consultas diárias. As salas possuem um horário específico de funcionamento (qual?). Diante disso, existe um agendamento prévio das salas de atendimento pelos alunos, tal agendamento é realizado pela secretaria da cliníca. Como o atendimento é seriado com um encontro semanal, o horário agendado pelo aluno deve ser repetido pelo período especificado pelo aluno. Cada pessoa atendida possui um prontuário psicológico que contém informações sobre o acompanhamento seriado.

Além do atendimento, a cliníca conta com três salas de reuniões gerais que são usadas para reuniões dos alunos, professores e coordenadores. Para utilizar uma sala de reunião, é necessário agendar previamente um horário disponível.

Finalmente, alguns relatórios são importantes para o acompanhamento dos trabalhos, como: atendimentos por mês, tipo de pacientes atendidos, atendimentos por aluno, atendimentos por sala, entre outros.


## Requisitos Não-Funcionais

Desempenho – Sistema deve atender os requisitos mínimos de desempenho como, resposta as solicitações feitas no sistema devem ter no máximo 5 segundos, em caso de retorno de registro, no máximo 10 segundos. Devemos procurar saber quais as configurações da maquina em que o sistema irá rodar, apesar de ser sistema Web, as configurações podem afetar no desempenho.

Confiabilidade/Disponibilidade – O sistema deverá estar disponível pelo menos entre o horário de funcionamento da clínica, já que os agendamentos serão realizados pelos funcionários da mesma, taxas de ocorrências de falhas de no máximo 5%.

Controle da agenda – Sistema deve controlar para que uma consulta não sobreponha outra, retornando uma mensagem de alerta.

Usabilidade/Interatividade – O sistema deve atender os requisitos mínimos de usabilidade como, tela com acesso rápido à todas as funções do sistema e opções de acesso intuitivas para minimização de treinamento e facilidade de acesso.

Portabilidade – O sistema devera ser acessado completamente via Browser e funcionar de maneira eficiente nos principais navegadores de internet.

Integridade /segurança – Apenas usuários com privilégios de acesso poderão fazer acessos, visualizar históricos e obter registros do sistema.

Documentação necessária/Suporte – A documentação on-line incluirá um tutorial de como utilizar o sistema.

Requisitos éticos: o sistema trabalhará de uma forma que mantenha em sigilo quaisquer dados de cunho privativo, como informações dos pacientes em geral.

Requisitos de entrega: deverá existir uma rotina de geração de um relatório de acompanhamento semanal, rotina esta parametrizável no sistema.

Requisitos de interoperabilidade: O sistema deverá se comunicar com o banco de dados, para a persistencia dos dados do sistema.

## Requisitos Funcionais
Telas de cadastro

Inclusão de pacientes:
- Nome Completo;
- CPF;
- Idade;
- Telefone 1, e/ou 2;

Inclusão de professor:
- Nome Completo;
- CPF;
- Idade;
- Telefone 1, e/ou 2;
- Registro do docente;

Inclusão de Sala de atendimento:
- Número da Sala;
- Bloco;

Nova Consulta:
- Aluno;
- Horário;
- Dia;
- Paciente;
- Evento (Atendimento que o paciente necessita (motivo da consulta/Tipo de atendimento));
- Flag de definição sobre Atendimento serial ou Consulta Única;
- obs: (Horários devem estar disponíveis);

Nova Reunião
- Tema;
- Alunos envolvidos;
- Dia;
- Horário;
- Professores envolvidos (opcional);

Inclusão de perfil Aluno:
- Nome Completo;
- CPF;
- Idade;
- Registro Acadêmico;
- Telefone 1, e/ou 2;
- Email;
- Log in e senha;

Inclusão de perfil Secretária:
- Nome Completo;
- CPF;
- Idade;
- Telefone 1, e/ou 2;
- Email;
- Log in e senha;

Inclusão de perfil Administrador:
- Nome Completo;
- CPF;
- Idade;
- Registro do Docente;
- Telefone 1, e/ou 2;
- Email;
- Log in e senha;



Agendamento de consultas (Perfil responsável: Secretária) – deve cadastrar o dia em que o paciente deseja realizar a consulta, para o tal, o dia e a hora desejados devem estar vagos.


Visualização da agenda  – o módulo visa gerenciar a agenda de cada aluno do consultório, com um sistema de visualização mensal (detalhada) com as descrições e informações dos atendimentos.


Agendamento de reuniões (Perfis responsáveis: Secretária e Administrador) - o sistema deve permitir a reserva de uma das 3 salas de reuniões, exigindo para isso, dia e hora desejados professores/alunos envolvidos e tema da reunião. 
As reuniões serão marcadas fazendo a verificação dos horários disponíveis das salas de atendimento e dos alunos envolvidos.


Inclusão de prontuário (Perfil responsável: Aluno) -  Inclusão, atualização e remoção de dados no prontuário do paciente, será um cadastro de histórico de todos as consultas realizadas, um relatório simples.


Acesso ao sistema – inicialmente uma tela de login, para o acesso as funcionalidades do sistema. 
o acesso ao sistema será feito por um nome de log in e senha, o sistema será aberto de acordo com o perfil.


Permissões de Usuários por Perfil 
- Serão criadas três categorias de usuários, com suas respectivas permissões, dentre as categorias de perfil estão: Administrador, Secretária e Aluno.

Administrador: Este é o perfil do professor Alexandre
A criação do perfil de Administrador é feita no primeiro momento em que o sistema é aberto pela primeira vez.
- Edita informações do Administrador;
- Inclui novo Aluno e Secretária;
- Edita todas as informações cadastrais de Aluno e Secretária;
- Remove Aluno e Secretária;
- Cria Reunião;
- Edita informações da Reunião (Tema, Horário, Alunos envolvidos, Resultados e etc);
- Cancela Reunião;
- Este Perfil não tem restrições de permissão, é capaz de controlar todo o sistema e tem as permissões de todos os perfis. (Secretária, Professor e Aluno).

Secretária: Este é o perfil o Responsável por marcar os horários das consultas e imprimir o comprovante, cadastrar pacientes no sistema, marcar reuniões.
- Possui um Bloco de anotações;
- Imprime comprovante da consulta;
- Edita perfil Secretária;
- Criar consulta;
- Editar Consulta (Alterar Aluno Responsável, Horário, paciente e etc);
- Remover Consulta;
- Edita informações da Reunião (Tema, Horário, Alunos envolvidos, Resultados e etc);
- Cancela Reunião;
- Cadastra Paciente;
- Altera informações do Paciente;
- Exclui Paciente;
- Cadastra Professor;
- Altera informações do Professor;
- Exclui Professor;
- Gerencia o calendário;
- Cadastra Sala de atendimento;
- Inclui, edita e exclui os Eventos (Motivo da consulta);

Aluno: 
- Edita informações do perfil Aluno;
- Preenche informações sobre a consulta;
- Solicita alteração de horário da consulta informando o motivo;
- Visualiza calendário;
- Visualiza suas consultas feitas e as futuras;
- Preenche prontuário do paciente;



Gerenciamento do calendário (Perfis responsáveis: Administrador e Secretária) - alterar periodo de funcionamento da clinica, bem como adicionar feriados e recessos.


Impressão de comprovante (Perfil responsável: Secretária) - O sistema deve permitir a impressão de um comprovante de consulta ao final da consulta, contendo o nome do Paciente, data e horário da consulta, nome do psicologo responsável (Aluno), e anotações sobre a consulta.


Remarcar Consulta (Perfil responsável - Secretária) - O paciente e o podem solicitar alteração de horário da consulta informando o motivo.

Incluir tipos de atendimento/Motivo - Eventos (Perfil responsável - Secretária): Serão adicionados no sistema os motivos das consultas, para que haja uma organização nos eventos que a consulta disponibiliza.
## Protótipo
