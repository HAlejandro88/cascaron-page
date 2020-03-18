import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../footer-component/footer-component.js';
import './acerca-element/acerca-element.js';

class MyPrincipal extends PolymerElement {
    static get template() {
        return html`
            <acerca-element></acerca-element>
            <footer-component></footer-component>
        `;
    }

    static get properties(){
        return{}
    }
}


window.customElements.define('my-principal',MyPrincipal);