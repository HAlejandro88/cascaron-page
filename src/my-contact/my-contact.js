import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '../footer-component/footer-component.js';

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
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.991604238994!2d-99.16126782930151!3d19.445687944680852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8c50818d2b9%3A0x7528be1c92bc013e!2sHermes%20Music%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1584658229721!5m2!1ses-419!2smx" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="card">
                <h2>¡Dejanos tus Datos!</h2>
                <form>
                    <paper-input label="Nombre"></paper-input>
                    <paper-input label="Razón Social"></paper-input>
                    <paper-input label="Email"></paper-input>
                    <paper-input label="Telefono"></paper-input>
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