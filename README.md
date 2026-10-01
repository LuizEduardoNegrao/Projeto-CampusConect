# CampusConnect

Sistema de agendamento, abertura, análise e fechamento de chamados voltado para instituições de ensino. O objetivo do CampusConnect é centralizar em um único lugar a comunicação entre alunos/colaboradores e a equipe responsável pelo suporte, tornando o processo de solicitação e acompanhamento de chamados mais simples, rápido e transparente.

## 📌 Sobre o projeto

O CampusConnect nasceu como projeto acadêmico das disciplinas **Fábrica de Software** e **Tópicos Avançados em Ciência da Computação**, com o propósito de aplicar, na prática, conceitos de engenharia de software, desenvolvimento full stack e design de produto em um sistema real de ponta a ponta — desde o levantamento de requisitos e prototipação até a implementação do front-end, back-end e banco de dados.

A proposta central do sistema é permitir que qualquer usuário da instituição (aluno, professor ou colaborador) consiga:

- Criar uma conta e acessar a plataforma de forma simples (cadastro tradicional ou login com Google);
- Abrir um chamado descrevendo um problema, categoria e prioridade;
- Acompanhar o status do chamado em tempo real (Aberto, Em Análise, Resolvido, Fechado);
- Visualizar um histórico e mensagens trocadas durante o atendimento;
- Receber notificações sobre atualizações relacionadas aos seus chamados;
- Gerenciar suas informações pessoais em um perfil próprio.

## 🛠️ Ferramentas e tecnologias

| Camada               | Tecnologia     |
| -------------------- | -------------- |
| Front-end            | **Next.js**    |
| Back-end             | **Node.js**    |
| Banco de dados       | **PostgreSQL** |
| Prototipação / UI-UX | **Figma**      |
| Containerização      | **Docker**     |

A escolha dessa stack visa unir produtividade e escalabilidade: Next.js para uma interface performática com renderização otimizada, Node.js para uma API robusta e desacoplada do front-end, PostgreSQL como banco relacional confiável para os dados de usuários e chamados, e Docker para padronizar o ambiente de desenvolvimento entre os membros da equipe.

## 🎨 Protótipo

Todo o fluxo de telas foi previamente desenhado e validado no **Figma** antes da implementação, cobrindo tanto a versão **mobile** quanto a versão **desktop (1920×1080)** da aplicação, com um design system consistente (paleta de cores, tipografia, botões, badges de status) entre as duas versões.

Telas mapeadas no protótipo:

1. **Welcome** – tela de boas-vindas com opção de cadastro ou login;
2. **Sign Up** – criação de conta (nome, telefone, e-mail, senha ou login com Google);
3. **Login** – acesso à plataforma;
4. **Recuperação de Senha** – fluxo de redefinição via e-mail;
5. **Dashboard** – visão geral dos chamados do usuário (abertos, em análise, resolvidos) e acesso rápido para abrir um novo chamado;
6. **Novo Chamado** – formulário de abertura (categoria, descrição, prioridade, anexos);
7. **Meus Chamados** – listagem com filtros e status coloridos;
8. **Detalhe do Chamado** – informações completas, histórico e mensagens trocadas com o suporte;
9. **Notificações** – atualizações relacionadas aos chamados do usuário;
10. **Perfil** – dados pessoais e configurações da conta.

O protótipo completo pode ser consultado no Figma do projeto [clicando aqui](https://www.figma.com/design/PrujjFHCtkboxvJopU03NY/CampusConnect----Prototype---FS---TACC?node-id=1001-2&t=cOTrkjG830MPLji7-1).

## 👥 Equipe

Projeto desenvolvido por um grupo de **4 integrantes** como parte das disciplinas de Fábrica de Software e Tópicos Avançados em Ciência da Computação, sendo: **Eduardo Negrão**, **Matheus Barbosa**, **Felipe Moura** e **Mateus Nunes**.

## 🚀 Status do projeto

🔧 Em desenvolvimento — protótipo (Figma) finalizado, ambiente Docker configurado, próxima etapa: implementação do front-end e back-end.
