import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';



class AcercaElement extends PolymerElement {
    static get template() {
        return html`
            <style>
                .conteiner {
                    display: grid;
                    grid-template-columns: 30% 30%;
                }
                
                .item {
                    background: lightblue;
                    padding: 10px;
                    border: 1px solid red;
                }
                .item img {
                    max-width: 50%;
                }
            </style>
            <div id="conteiner">
                <div class="item">
                    <h1>Nosotros</h1>
                    <p>Nostros somos una empresa dedicada a vender equipos para prdoccion de musica</p>
                </div>
                <div class="item">
                    <img src="https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/content_image/2019/4/26/1556300535759-resena-el-espacio-entre-nosotros.001.jpeg" alt="Smiley face" >
                </div>
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


window.customElements.define('acerca-element', AcercaElement);
