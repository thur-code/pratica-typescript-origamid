# 🧩 TypeScript para Iniciantes – Curso Origamid

Projetos desenvolvidos como parte do curso **[TypeScript para Iniciantes](https://www.origamid.com/curso/typescript-para-iniciantes/)** da Origamid.  
O curso tem como objetivo introduzir os fundamentos do **TypeScript**, aplicando-os na prática em dois pequenos projetos:  
- **Manipulação de Dados** (trabalhando com Fetch, tipagem e estatísticas).  
- **Manipulação do DOM** (criação de um *slide interativo* no estilo “Stories”).  

---

## 🚀 Preview

🔗 [Acesse o projeto online aqui](https://thur-code.github.io/pratica-typescript-origamid/index.html) 

---

## 🧮 Projeto 1 — Prática Dados

O objetivo desse projeto foi **consumir dados via Fetch API**, normalizá-los e apresentar estatísticas no DOM utilizando **TypeScript**.  
Foram aplicados conceitos de **tipagem**, **interfaces**, **generics**, **Type Guards** e **DOM Manipulation**.

![Preview do projeto de dados](./dados.png)

---

### 🛠 Tecnologias utilizadas
- **TypeScript**  
- **HTML5**  
- **CSS3** (básico para layout e tabelas)  
- **Fetch API**

---

### 🎯 Conceitos aplicados
- Definição e uso de **tipos, interfaces e aliases**.  
- Implementação de **Generics** e **Type Guards**.  
- Manipulação e transformação de dados obtidos via **Fetch API**.  
- Criação de **funções utilitárias** para formatação de valores e datas.  
- Uso de **Classes** para organizar lógica de estatísticas (ex: total, status, forma de pagamento, melhor dia de vendas).  
- Renderização dinâmica de dados no DOM (tabelas e listas).  

---

### 📂 Estrutura principal
```
pratica-dados/
│
├── dados.html
├── style.css
├── src/
│   ├── script.ts
│   ├── Estatisticas.ts
│   ├── fetchData.ts
│   ├── moedaParaNumero.ts
│   ├── normalizarTransacao.ts
│   ├── stringToDate.ts
│   └── countBy.ts
└── dist/
```

---

## 🖼️ Projeto 2 — Prática DOM

O segundo projeto foi voltado à **manipulação do DOM** e **controle de eventos** utilizando TypeScript.  
O desafio principal foi criar um **Slide de Stories** (imagens e vídeo), aplicando classes, métodos e controle de tempo.

![Preview do slide](./dom.png)

---

### 🛠 Tecnologias utilizadas
- **TypeScript**  
- **HTML5**  
- **CSS3**

---

### 🎯 Conceitos aplicados
- Criação e uso de **Classes** em TypeScript.  
- Controle de **tempo e animação** com uma classe auxiliar `Timeout`.  
- Implementação de **pausa automática** (pointerdown/pointerup).  
- Manipulação de **elementos do DOM** e controle de estado (slides ativos).  
- Uso de **localStorage** para armazenar o último slide visualizado.  
- Animação de barra de progresso (thumb) com **CSS + JS**.  

---

### 📂 Estrutura principal
```
pratica-dom/
│
├── dom.html
├── style.css
├── src/
│   ├── script.ts
│   ├── Slide.ts
│   └── Timeout.ts
└── dist/
```

---

## 📘 Sobre o curso

O curso **TypeScript para Iniciantes** da Origamid apresenta os principais recursos da linguagem, com foco em aplicá-los na prática dentro do ecossistema JavaScript.  
Durante as aulas, foram abordados:

- Tipos primitivos e complexos  
- Union e Intersection Types  
- Interfaces e Type Aliases  
- Funções genéricas  
- Type Guards e narrowing  
- Manipulação de dados e Fetch API  
- Manipulação do DOM com TypeScript  
- Projeto prático de *Stories Slide*

---

## 📂 Status dos projetos

✅ **Prática Dados** — Concluído  
✅ **Prática DOM (Slide Stories)** — Concluído  

---

## 📝 Observações

Estes projetos foram desenvolvidos **de forma guiada** durante o curso da Origamid.  
O foco foi **aprender os fundamentos do TypeScript**, entendendo como aplicá-lo para **estruturar, tipar e manipular dados e elementos do DOM**.  
O código foi mantido próximo ao exemplo do professor, com pequenas melhorias de organização e boas práticas.  
