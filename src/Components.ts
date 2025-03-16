class Component {
    element: HTMLElement;
    children: Component[] = [];

    constructor({
        tag = 'div',
        id,
        classes = [],
        content,
        children = [],
        attributes = {}
    }: {
        tag?: string;
        id?: string;
        classes?: string[];
        content?: string;
        children?: { tag?: string; id?: string; classes?: string[]; content?: string; attributes?: { [key: string]: string }; children?: any[] }[]
        attributes?: { [key: string]: string };
    }) {

        this.element = document.createElement(tag);
        this.element.id = id ||crypto.randomUUID();

        if (classes.length) this.element.classList.add(...classes);

        for (let key in attributes) {
            this.element.setAttribute(key, attributes[key]);
        }

        if (content) {
            const span = document.createElement('span')
            span.textContent = content
            this.element.appendChild(span)
        }

        this.children = children.map((child) => child instanceof Component ? child : new Component(child));
        this.children.forEach(child => this.element.appendChild(child.element));

    }  

    render(parent = document.body) {
        parent.appendChild(this.element);
        console.log(`Elemento <${this.element.tagName.toLowerCase()}> criado com ID: ${this.element.id}`);
        return this;
    }

    destroy() {
        this.element.remove();
    }
}

export{Component}