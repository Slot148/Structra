# **Structra**

A **Structra** é uma biblioteca JavaScript que permite a criação e gerenciamento de componentes HTML de maneira modular, reutilizável e flexível. Ela foi projetada para facilitar a construção de interfaces dinâmicas, simplificando a criação de elementos HTML, a manipulação de atributos, classes e conteúdo de forma intuitiva.

---

## **Sumário**

1. [Introdução](#introdução)
2. [Instalação](#instalação)
3. [Uso Básico](#uso-básico)
4. [Estrutura de Componentes](#estrutura-de-componentes)
5. [API da Structra](#api-da-structra)
   - [Classe `Component`](#classe-component)
   - [Métodos da Classe `Component`](#métodos-da-classe-component)
6. [Exemplo Completo](#exemplo-completo)
7. [Considerações Finais](#considerações-finais)
8. [Atualizações Futuras](#atualizações-futuras)

---

## **Introdução**

A **Structra** oferece uma maneira eficiente e modular de criar componentes HTML personalizados. Ela permite que você crie componentes reutilizáveis, configure seus atributos, adicione filhos e controle o processo de renderização de maneira simples e eficaz.

---

## **Instalação**

### **Com npm (Node Package Manager)**

Se você estiver utilizando o Node.js e o npm, basta rodar o seguinte comando:

```sh
npm i stuctra
```

### **Com CDN**

Você pode também incluir a biblioteca diretamente no seu projeto usando o CDN:

```
AINDA INDISPONIVEL
```

---

## **Uso Básico**

A **Structra** permite que você crie e renderize componentes HTML de forma muito simples, sem a necessidade de escrever muito código repetitivo. A criação de um componente básico é feita da seguinte maneira:

```javascript
const myComponent = new Component({
  tag: 'div',
  content: 'Olá, este é um componente simples!'
});
```

Assim que o componente for criado, ele será automaticamente renderizado dentro do `document.body`.

---

## **Estrutura de Componentes**

Cada componente é uma instância da classe `Component`, que recebe um objeto de configuração. O principal objetivo da **Structra** é garantir que seus componentes sejam fáceis de criar, configurar e manipular.

### **Exemplo de Estrutura de Componente:**

```javascript
const myComponent = new Component({
  tag: 'div',
  id: 'container',
  classes: ['container', 'highlighted'],
  content: 'Bem-vindo à Structra!',
  children: [
    { tag: 'h1', content: 'Título do Componente' },
    { tag: 'p', content: 'Este é um parágrafo dentro do componente.' }
  ]
});
```

---

## **API da Structra**

### **Classe `Component`**

A classe `Component` é o coração da **Structra**. Ela representa qualquer componente HTML e oferece um conjunto de métodos para manipulação dos elementos e seus filhos.

#### **Propriedades:**

- **`element`**: O elemento DOM gerado pela instância da classe. Pode ser manipulado diretamente.
- **`children`**: Uma lista de instâncias de `Component` que são filhos do componente atual.

#### **Construtor da Classe `Component`:**

O construtor recebe um objeto de configuração, que define as propriedades do componente.

```javascript
new Component({
  tag: 'div',
  id: 'meuComponente',
  classes: ['class1', 'class2'],
  content: 'Conteúdo do componente',
  children: [
    { tag: 'p', content: 'Texto do parágrafo' }
  ]
});
```

### **Métodos da Classe `Component`**

- **`render(parent: HTMLElement)`**: Este método insere o componente no DOM. Ele é chamado automaticamente ao criar o componente, mas também pode ser chamado manualmente para renderizar em um elemento pai específico.
  
  ```javascript
  myComponent.render(document.getElementById('custom-container'));
  ```

- **`destroy()`**: Remove o componente e seus filhos do DOM.

  ```javascript
  myComponent.destroy();
  ```

---

## **Exemplo Completo**

Aqui está um exemplo completo de uso da **Structra**:

```javascript
// Criando um componente principal
const container = new Component({
  tag: 'div',
  id: 'container',
  classes: ['main-container'],
  content: 'Este é o componente principal!',
  children: [
    { tag: 'h1', content: 'Título principal' },
    { tag: 'p', content: 'Texto de exemplo para um parágrafo.' },
    { tag: 'button', content: 'Clique aqui' }
  ]
});

// O componente será automaticamente renderizado no corpo da página
```

### **Resultado Esperado:**

- Um `div` com o ID `container`, as classes `main-container`, e o conteúdo "Este é o componente principal!". Dentro dessa `div`, há três filhos: um título (`h1`), um parágrafo (`p`), e um botão (`button`). O componente será automaticamente inserido no `body` da página.

---

## **Considerações Finais**

A **Structra** foi criada para simplificar a criação de interfaces dinâmicas e componentes reutilizáveis. Sua estrutura modular e flexível permite que você organize e manipule seu código de maneira mais eficiente, sem precisar lidar com complexidade desnecessária. Se você deseja criar interfaces dinâmicas e customizadas, a **Structra** é uma escolha excelente para seu projeto.

---

## **Atualizações Futuras**

A **Structra** está em constante evolução, e algumas das funcionalidades que estamos planejando para versões futuras incluem:

- **Integração com arquivos JSON**: Permitir a criação de componentes diretamente a partir de arquivos `.json`, facilitando a definição da estrutura de componentes de forma dinâmica.
  
- **Suporte a Templates**: Implementação de templates para reutilização de componentes.

- **Otimização e Performance**: Melhorias contínuas na renderização e desempenho da biblioteca.

Fique atento às novas atualizações!

