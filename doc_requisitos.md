# Documento de Requisitos do Sistema X

## Objetivo

Este trabalho consiste no desenvolvimento de um sistema para gestão da Clínica Psicólogicga da Uningá que padronize e facilite o controle das atividades realizadas, visando um melhor controle administrativo e mais agilidade na prestação dos serviços aos pacientes. Além disso, busca fornecer maior segurança e confiabilidade no tratamento das informações.

## Descrição do Sistema

Atualmente, todas as atividades da clínica psicológica da Uningá estão sendo realizadas de maneira manual. Com isso, surge a necessidade do desenvolvimento de um sistema de software para facilitar a forma como as atividades são realizadas. O sistema deve gerenciar as informações sobre as salas disponíveis e consultas psicológicas, de modo a padronizar as informações permitindo a geração de relatórios de maneira simples. As características, como: usabilidade, interatividade e integridade dos dados são importantes.

A clínica psicológica possui cinco salas de atendimento para a comunidade externa em que os estudantes de psicologia realizam o acompanhamento dos pacientes, cada consulta possui duração de uma hora, portanto, suportam um número limitado de consultas diárias. As salas possuem um horário específico de funcionamento (qual?). Diante disso, existe um agendamento prévio das salas de atendimento pelos alunos, tal agendamento é realizado pela secretaria da cliníca. Como o atendimento é seriado com um encontro semanal, o horário agendado pelo aluno deve ser repetido pelo período especificado pelo aluno. Cada pessoa atendimento possui um prontuário psicológico que contém informações sobre o acompanhamento seriado.

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

Inclusão de pacientes – Tela da inclusão dos dados cadastrais do cliente, visualização, inclusão e remoção.

Agendamento de consultas – deve cadastrar o dia em que o paciente deseja realizar a consulta, para o tal, o dia e a hora desejados devem estar vagos, assim que estiver cadastrado o sistema deverá automaticamente agendar a próxima consulta com a data repetida pelo período especificado pelo aluno.

Visualização da agenda – o módulo visa gerenciar a agenda de cada aluno do consultório, com um sistema de visualização mensal (detalhada) com as descrições dos atendimentos.

Agendamento de reuniões - o sistema deve permitir a reserva de uma das 3 salas de reuniões, exigindo para isso, dia e hora desejados. 

Inclusão de prontuário -  Inclusão, atualização e remoção de dados no prontuário do paciente, será um cadastro de histórico de todos as consultas realizadas, um relatório simples.

Inclusão de Alunos = Tela da inclusão dos dados cadastrais dos alunos, visualização, inclusão e remoção.

Acesso ao sistema – inicialmente uma tela de login, para o acesso as funcionalidades do sistema.

Permissões de Usuários por Perfil - Serão criadas três categorias de usuários, com suas respectivas permissões, dentre as categorias de perfil estão: Administrador, Secretária e Aluno.

## Protótipo
