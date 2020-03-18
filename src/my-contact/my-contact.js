import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class MyContact extends PolymerElement {
    static get template() {
        return html `
            <style>
                .card {
                    margin: 24px;
                    padding: 16px;
                    color: #757575;
                    border-radius: 5px;
                    background-color: #fff;
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                }
            </style>
            <div class="card">
                <form>
                    <paper-input always-float-label label="Nombre"></paper-input>
                    <paper-input always-float-label label="Razón Social"></paper-input>
                    <paper-input always-float-label label="Email"></paper-input>
                    <paper-input always-float-label label="Telefono"></paper-input>
                    <paper-textarea label="Comentarios"></paper-textarea>
                    <paper-button raised class="indigo" on-tap="enviarCorreo">Enviar</paper-button>
                </form>
            </div>
        `;
    }

    static get properties() {
        return{}
    }

    enviarCorreo() {
    }
}

window.customElements.define('my-contact', MyContact);