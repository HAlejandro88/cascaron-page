import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class FooterComponent extends PolymerElement {
    static get template() {
        return html`
            <style>
                .pie {
                    height:70px;
                    line-height:50px;
                    background:#3f51b5;
                    color:white;
                    text-align:center;
                    position:absolute;
                    bottom:0;
                    left:0;
                    width:100%;
                }
            </style>
            <div class="pie">
            2020 &copy; Nombre empresa
            </div>
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


window.customElements.define('footer-component',FooterComponent);