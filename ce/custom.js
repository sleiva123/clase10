// Cambiar el nombre entre comillas para crear un elemento.
crearElemento("mi-elemento");
crearElemento("mi-p");


function crearElemento(nombre) {
    customElements.define(nombre,
    class extends HTMLElement {
        constructor(...props) {
        super(...props);
        var extern = document.getElementsByTagName("link")[0].import;
        
        let template = extern.getElementById("mi-elemento"); // document.getElementById('mi-elemento');
        
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(templateContent.cloneNode(true));
    }

        static get observedAttributes() {return ['name']; }

        
        attributeChangedCallback(attr, oldValue, newValue) {
            console.log(oldValue, newValue)
            if (attr == 'name') {
            this.textContent = `Hello, ${newValue}`;
            }
        }
    })
}

