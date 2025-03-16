# **Patch Notes**
## **1.1.0**

- Removida a opção de renderizar o objeto automaticamente ao body no momento em que é criado.


    - Forma atual de renderizar automaticamente.
```javascript
    const Container = new Component({
        tag: 'button',
        content: 'alerta'
    }).render()
```
