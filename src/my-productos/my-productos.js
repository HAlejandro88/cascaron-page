import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';


class MyProductos extends PolymerElement {
    static get template() {
        return html`
        <paper-tabs selected="0">
            <paper-tab>Categorias</paper-tab>
            <paper-tab>Productos</paper-tab>
        </paper-tabs>
        `;
    }

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            
        };
    }
}


window.customElements.define('my-productos',MyProductos);