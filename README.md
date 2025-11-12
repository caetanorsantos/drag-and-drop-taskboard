# 📋 Drag and Drop Taskboard

Um quadro de tarefas interativo com funcionalidade de arrastar e soltar, construído com HTML, CSS (Tailwind) e JavaScript puro.

## 📸 Preview

![Screenshot do Projeto](https://github.com/user-attachments/assets/your-image-id-here)

## ✨ Funcionalidades

- ✅ **Drag and Drop** - Arraste e solte tarefas entre as colunas (To Do, In Progress, To Review, Done)
- ✅ **Criar tarefas** - Duplo clique em qualquer coluna para criar uma nova tarefa
- ✅ **Excluir tarefas** - Duplo clique em uma tarefa para removê-la (com confirmação)
- ✅ **Feedback visual** - Destaque das colunas ao arrastar tarefas sobre elas
- ✅ **Atalhos de teclado** - Pressione Enter para finalizar a criação de uma tarefa
- ✅ **Interface responsiva** - Layout adaptável para diferentes tamanhos de tela
- ✅ **Design limpo** - Estilização moderna com Tailwind CSS

## 🚀 Tecnologias

Este projeto utiliza tecnologias web modernas e boas práticas de desenvolvimento:

### Core

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e transições
- **Tailwind CSS v3** - Framework CSS utility-first
- **JavaScript (ES6+)** - Lógica e interatividade

### APIs Nativas

- **Drag and Drop API** - Funcionalidade nativa de arrastar e soltar
- **ContentEditable API** - Edição inline de tarefas
- **DOM API** - Manipulação de elementos

### Boas Práticas Implementadas

- ✅ JavaScript moderno (ES6+)
- ✅ Event delegation
- ✅ Funções puras e reutilizáveis
- ✅ Nomenclatura semântica (BEM-like)
- ✅ Código limpo e documentado
- ✅ Select desabilitado para melhor UX no drag and drop

## 📁 Estrutura do Projeto

```
drag-and-drop-taskboard/
├── dist/              # Código fonte da aplicação
│   ├── index.html     # Página principal
│   ├── output.css     # CSS compilado (Tailwind)
│   └── script.js      # Lógica da aplicação
├── src/
│   └── input.css      # CSS fonte para compilação (Tailwind)
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔧 Instalação e Uso

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para rodar localmente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/caetanorsantos/drag-and-drop-taskboard.git
   cd drag-and-drop-taskboard
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   - **Opção 1:** Abrir diretamente

     ```bash
     # Abra o arquivo dist/index.html no navegador
     ```

   - **Opção 2:** Com servidor local (recomendado)
     ```bash
     # Usando Live Server do VS Code ou
     npx serve dist
     ```

### Build para Produção

Se você fizer alterações no CSS:

```bash
npm run build
# ou
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

## 💡 Como Usar

1. **Criar Tarefa:** Duplo clique em qualquer coluna vazia para criar uma nova tarefa
2. **Escrever Tarefa:** Digite o conteúdo da tarefa
3. **Salvar Tarefa:** Pressione `Enter` ou clique fora da tarefa para salvar
4. **Mover Tarefa:** Clique e arraste a tarefa para outra coluna
5. **Excluir Tarefa:** Duplo clique em uma tarefa existente e confirme a exclusão

### ⌨️ Atalhos de Teclado

- `Enter` - Finaliza a criação/edição da tarefa atual
- `Duplo clique (coluna vazia)` - Cria nova tarefa
- `Duplo clique (tarefa)` - Exclui a tarefa

## 🎨 Personalização

Para personalizar as cores e estilos, edite o arquivo `tailwind.config.js`:

```javascript
module.exports = {
	theme: {
		extend: {
			colors: {
				primary: "#sua-cor-aqui",
			},
		},
	},
};
```

## 📝 Roadmap

- [ ] Funcionalidade de editar tarefas existentes
- [ ] Persistência de dados (LocalStorage ou IndexedDB)
- [ ] Botões visuais para criar/excluir tarefas (além do duplo clique)
- [ ] Temas claro/escuro
- [ ] Cores e tags para categorizar tarefas
- [ ] Prioridade das tarefas (alta, média, baixa)
- [ ] Filtros e busca
- [ ] Data de criação e prazo
- [ ] Exportar/Importar tarefas (JSON)
- [ ] Animações de transição
- [ ] Drag and drop em dispositivos móveis (touch)

## 👤 Autor

**Caetano R Santos**

- GitHub: [@caetanorsantos](https://github.com/caetanorsantos)
- LinkedIn: [caetanorsantos](https://www.linkedin.com/in/caetanorsantos)

## ⭐ Mostre seu apoio

Se este projeto te ajudou, deixe uma ⭐!
