# 🚗 MVC_Veiculos_NodeJS

Este projeto é uma aplicação web simples desenvolvida com **Node.js** e **Express**, utilizando a arquitetura **Model-View-Controller (MVC)** e a engine de templates **EJS**. O objetivo é demonstrar um **CRUD (Create, Read, Update, Delete)** básico para gerenciamento de veículos, com uma interface limpa e moderna estilizada com **Bootstrap**.

## ✨ Funcionalidades

* **Listagem (Read):** Exibe todos os veículos.
* **Cadastro (Create):** Permite adicionar novos veículos (ID e Nome) por meio de um formulário que é **dinamicamente exibido/ocultado** com um botão na tela principal 
* **Edição (Update):** Permite buscar um veículo por ID, carregar seus dados em uma tela separada e atualizar o Nome (ID é somente leitura). A edição utiliza o método **`POST`** para processamento
* **Deleção (Delete):** Permite remover um veículo da lista com confirmação.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução JavaScript no lado do servidor. |
| **Express.js** | Framework web minimalista para Node.js, usado para gerenciar o servidor e as rotas. |
| **EJS (Embedded JavaScript)** | Engine de templates para renderização dinâmica das Views. |
| **JavaScript (Cliente)** | Utilizado no `homeView.ejs` para a lógica de exibir/ocultar o formulário de cadastro. |

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para colocar o projeto em funcionamento em seu ambiente local.

### 1. Clonar o Repositório

```bash
git clone <URL_DO_SEU_REPOSITÓRIO>
cd MVC_Veiculos_NodeJS