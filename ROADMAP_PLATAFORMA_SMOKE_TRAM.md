# Roadmap de próximos passos — Plataforma Smoke Tram

## Visão geral

A plataforma atual funciona como uma landing page comercial para a Smoke Tram, com foco em:
- hero institucional e posicionamento da marca;
- bloco de experiências/profissionais;
- vitrine de jersey merchandise;
- carrinho de compras de demonstração;
- CTA para comunidade e contato.

O próximo passo é transformar essa vitrine em uma plataforma real, sustentável e segura, com dados oficiais, fluxo comercial, autenticação, administração e estrutura de crescimento.

A jornada deve remover todos os mocks, substituir dados ilustrativos por dados reais do negócio e preparar a base para operação em produção.

---

## Objetivo estratégico

Construir uma plataforma de e-commerce e comunidade que permita:
1. vender experiências e produtos de forma organizada;
2. apresentar a marca Smoke Tram como organização profissional;
3. gerar leads e conversões reais;
4. ter autenticação, segurança e governança adequadas;
5. reduzir dependência de dados fictícios e demos;
6. preparar o sistema para escala e operação contínua.

---

## Princípios da evolução

- Não manter dados mockados em ambiente de produção;
- priorizar segurança desde o início;
- separar front-end, dados e regras de negócio;
- definir entidades de negócio antes de criar novas telas;
- validar com testes reais antes de liberar versões;
- aprovar cada funcionalidade por impacto em marca, conversão e risco operacional.

---

## Estrutura da plataforma a ser evoluída

### 1) Front-end institucional
- hero, apresentação da marca, proposta de valor;
- navegação e comunicação da organização;
- seções estruturadas por público e intenção de compra.

### 2) Vitrine e catálogo
- experiências e serviços;
- merch e jersey;
- filtros, detalhes de produto, preços e disponibilidade.

### 3) Carrinho e checkout
- adicionar itens;
- alterar quantidade;
- remover itens;
- checkout com integração de pagamento;
- confirmação e notificação.

### 4) Dados e perfis
- profissionais, staff, mentores, parceiros;
- formações, experiências e disponibilidade;
- conteúdo editorial e diferencial de cada perfil.

### 5) Operação e gestão interna
- painel administrativo;
- cadastro de produtos;
- controle de pedidos;
- atualização de conteúdo e campanhas;
- envio de mensagens e acompanhamento de leads.

### 6) Segurança e compliance
- autenticação; autorização; proteção de rotas;
- gestão de secrets; validação de inputs; proteção contra abuso;
- monitoramento de vulnerabilidades; backup; logs.

---

## Sprint 0 — Diagnóstico, arquitetura e remoção de mocks

### Objetivo
Definir a estrutura produtiva real e remover toda dependência de placeholders, lorem, perfis e preços ilustrativos.

### Entregáveis
- mapa completo das entidades de negócio;
- catálogo de dados considerados “mockados”;
- definição de stack de produção e ambiente;
- checklist de segurança mínimo para etapa inicial;
- backlog priorizado por impacto e esforço.

### Tarefas
- revisar todas as seções do front-end e mapear o que é real vs demo;
- definir modelos: Produto, Experiência, Usuário, Pedido, Perfil, Parceiro, Campanha;
- criar estrutura de dados para banco e API;
- remover textos com “perfil demonstrativo” e “valor ilustrativo”;
- padronizar nomes de domínio e dados em produção;
- estabelecer regras de branch, review e deploy.

### Critérios de aceitação
- nenhum dado fictício em telas de produção;
- backlog nível 1, 2 e 3 definido;
- arquitetura de dados validada;
- política de ambiente (dev, staging, prod) estabelecida.

---

## Sprint 1 — Base funcional da plataforma

### Objetivo
Transformar a vitrine em um sistema funcional de catálogo e conversão.

### Entregáveis
- catálogo de produtos e experiências real;
- páginas de detalhe;
- navegação com filtros;
- CTA de compra/contato funcional;
- ajuste da identidade visual para ambiente comercial.

### Tarefas
- modelar produtos e experiências como entidades reais;
- construir páginas de detalhe de produto e serviço;
- corrigir textos institucionais e comerciais;
- remover blocos que parecem apenas mockup;
- preparar fluxo para compra, contato ou agendamento;
- validar responsividade em mobile, tablet e desktop.

### Critérios de aceitação
- a loja não parece mais uma demo;
- o visitante consegue entender o que está sendo vendido;
- toda informação principal está consistente com a operação real.

---

## Sprint 2 — Carrinho, checkout e conversão

### Objetivo
Ativar o processo de compra e conversão real.

### Entregáveis
- carrinho funcional;
- checkout completo;
- fluxo de confirmação;
- integração com gateway de pagamento;
- mensagens de status e confirmação por e-mail/WhatsApp.

### Tarefas
- conectar o carrinho ao estado real do usuário;
- permitir persistência de itens em sessão ou conta;
- implementar checkout de produto e serviço;
- integrar Stripe, Mercado Pago ou solução equivalente;
- criar confirmação de pedido e filtros de status;
- validar cenários de erro e recorrência;
- protege a lógica de preço e estoque.

### Critérios de aceitação
- compra concluída sem manipulação manual;
- pedido guarda dados consistentes;
- fluxo de pagamento configurado em ambiente seguro;
- erros e cancelamentos tratados.

---

## Sprint 3 — Autenticação, perfis e experiência de usuário

### Objetivo
Dar ao sistema identidade de plataforma e não apenas vitrine.

### Entregáveis
- autenticação de usuários;
- perfis de cliente e administrador;
- recuperação de senha;
- área para gestão de conta e pedidos.

### Tarefas
- configurar NextAuth, Clerk, Supabase Auth ou solução equivalente;
- criar roles: visitante, cliente, admin, staff;
- criar área pessoal com histórico de compras;
- controlar acesso a rotas administrativas;
- proteger endpoints sensíveis;
- criar sessão e cookies com política segura.

### Critérios de aceitação
- usuários não conseguem acessar áreas administrativas;
- dados pessoais são protegidos e isolados;
- autenticação funciona em produção com boas práticas.

---

## Sprint 4 — Área administrativa e gestão da operação

### Objetivo
Tornar a plataforma operável pela equipe.

### Entregáveis
- painel administrativo;
- gestão de produtos, experiências e pedidos;
- cadastro de profissionais e parceiros;
- publicação e edição de conteúdo.

### Tarefas
- criar dashboard com resumo geral;
- gerenciar produtos e experiências;
- editar preços, disponibilidade e estoque;
- atualizar textos, banners e destaques;
- visualizar pedidos, status e possíveis cancelamentos;
- construir histórico e auditoria de ações.

### Critérios de aceitação
- equipe consegue operar sem intervenção técnica;
- alterações passam por validação e registro;
- ações críticas ficam protegidas por autorização.

---

## Sprint 5 — CMS e conteúdo institucional

### Objetivo
Transformar a marca em plataforma viva com conteúdo gerenciável.

### Entregáveis
- CMS simples para textos e notícias;
- gestão de campanhas e materiais;
- integração com redes sociais e agenda;
- atualização do conteúdo institucional sem código.

### Tarefas
- criar páginas de notícias/ações/campanhas;
- permitir edição de textos e imagens por admin;
- estruturar um sistema de publicação com status draft/publicado;
- integrar feed de redes sociais ou criar área editorial própria;
- mapear uso de microcopy e SEO.

### Critérios de aceitação
- a comunicação da organização fica sustentada por conteúdo real;
- a equipe consegue publicar sem dependência do dev;
- a plataforma deixa de depender de conteúdo hardcoded.

---

## Sprint 6 — Segurança cibernética e hardening

### Objetivo
Não apenas entregar funcionalidade, mas garantir proteção e confiabilidade.

### Entregáveis
- checklist de segurança implementado;
- autenticação e autorização boas práticas;
- monitoramento e respostas a incidentes;
- políticas de dados e privacidade.

### Tarefas
- remover dados sensíveis do front-end;
- mover secrets para variáveis de ambiente;
- configurar CORS, CSP e headers de segurança;
- validar inputs e evitar SQL injection, XSS, SSRF, CSRF;
- proteger rotas e APIs;
- configurar rate limiting e logs;
- habilitar backups do banco e versionamento de dados;
- revisar dependências com npm audit, Snyk ou ferramentas equivalentes;
- ativar monitoramento de erros e alertas.

### Critérios de aceitação
- nenhuma credencial em código;
- rotas críticas autenticadas e protegidas;
- vulnerabilidades conhecidas tratadas;
- processo de resposta a incidentes documentado.

---

## Sprint 7 — QA, testes e preparação para produção

### Objetivo
Garantir qualidade e reduzir risco antes da operação em escala.

### Entregáveis
- suíte de testes automatizados;
- smoke tests em rotas críticas;
- relatório de regressão e validação de comportamento;
- checklist final de release.

### Tarefas
- cobrir fluxo de home, katalog, carrinho, checkout, autenticação e admin;
- testar integrações de pagamento e envio de e-mail;
- automatizar testes de regressão para componentes principais;
- validar performance em mobile e desktop;
- revisar acessibilidade e SEO básico;
- preparar planilha de QA e produção.

### Critérios de aceitação
- alterações principais possuem cobertura de regressão;
- bugs críticos resolvidos antes do deploy;
- processo de release definido e repetível.

---

## Sprint 8 — Lançamento, otimização e operação contínua

### Objetivo
Colocar a plataforma em produção com foco em crescimento e manutenção.

### Entregáveis
- ambiente de produção online;
- analytics e monitoramento ativos;
- campanha inicial e acompanhamento de conversão;
- rotina de manutenção e atualização.

### Tarefas
- publicar versão estável em produção;
- integrar Google Analytics / Vercel Analytics / eventos de conversão;
- acompanhar taxa de conversão, abandono e tráfego;
- monitorar erros e tempo de carregamento;
- revisar impacto de campanhas e experimentos;
- criar backlog contínuo de melhoria com base em métricas.

### Critérios de aceitação
- plataforma em uso real com rotina de operação;
- métricas definidas e monitoradas;
- backlog de melhorias com priorização clara.

---

## Remoção dos mocks — checklist obrigatório

A remoção dos mocks deve ser tratada como parte do ciclo de desenvolvimento e não como tarefa isolada. O checklist abaixo deve valer para cada sprint:

### Dados
- [ ] remover textos “demonstrativo”, “ilustrativo”, “perfil de amostra”;
- [ ] substituir preços e valores fictícios por dados reais;
- [ ] remover fotos e imagens placeholders que não representem a marca;
- [ ] garantir que produtos/experiências tenham dados válidos e completos.

### Funcionalidades
- [ ] remover botões que só simulam ação sem backend;
- [ ] garantir que ações de compra/contato/registro realmente funcionem;
- [ ] desativar ou eliminar endpoints temporários de demo;
- [ ] substituir eventos de mock por eventos reais de negócio.

### Segurança
- [ ] remover secrets hardcoded;
- [ ] validar autenticação e autorização;
- [ ] remover qualquer debug, console em excesso ou logs sensíveis;
- [ ] revisar todos os fluxos que acessam dados externos.

### UX e visão de produto
- [ ] a plataforma deve parecer uma solução real e profissional;
- [ ] a linguagem deve estar alinhada ao posicionamento da marca;
- [ ] o design deve comunicar confiança, clareza e conversão.

---

## Priorização recomendada

### Fase 1 — Crítica
1. remoção de mocks;
2. autenticação e proteção;
3. dados reais e estrutura de catálogo;
4. checkout e pagamento;
5. painel administrativo básico.

### Fase 2 — Crescimento
1. CMS;
2. integração de e-mail/WhatsApp;
3. gestão de campanhas e parceiros;
4. analytics e otimização de conversão.

### Fase 3 — Escala
1. automações;
2. CRM;
3. dashboards avançados;
4. expansão para novos produtos e públicos.

---

## Resumo executivo

A plataforma atual já é uma boa base visual e de posicionamento, mas ainda está em estágio de mockup funcional. O próximo passo natural é transformar isso em um sistema real de comércio, relacionamento e operação. A prioridade precisa ser:

1. remover tudo que for fictício;
2. tornar a plataforma segura e administrável;
3. entregar conversão real;
4. evoluir para uma operação escalável e sustentável.

Com essa lógica, a plataforma deixa de ser apenas uma landing page e passa a funcionar como um negócio digital completo, com marca, merchandising, relacionamento e operação real.
