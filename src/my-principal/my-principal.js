import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';

class MyPrincipal extends PolymerElement {
    static get template() {
        return html`
            <style>
                .conteiner {
                    width: 100%;
                    display: grid;
                    grid-template: repeat(10, 230px) / repeat(7,1fr) ;
                    height: auto;
                }
                .item {
                    padding: 10px;
                }
                
                .item:nth-of-type(1) {
                    overflow: auto;
                    display: grid;
                    grid-column: 1 / -1;
                    grid-row: 1 / span 2;
                    grid-gap: 10px;
                    grid-template: 100%  / auto auto ;
                }

                .item:nth-of-type(2) {
                    overflow: auto;
                    display: inline-block;
                    
                    grid-column: 1 / -1;
                    grid-row: 3 / span 2;
                }
                .item:nth-of-type(3) {
                    overflow: auto;
                    display: grid;
                    grid-column: 1 / -1;
                    grid-row: 5 / span 2;
                }
                .item:nth-of-type(4) {
                    overflow: auto;
                    display: grid;
                    grid-column: 1 / -1;
                    grid-row: 7 / span 2;
                }
                .item:nth-of-type(5) {
                    overflow: auto;
                    display: grid;
                    grid-column: 1 / -1;
                    grid-row: 9 / span 2;
                }

                .item .sub {
                    
                }

                .item .sub h2 {
                    text-align: center;
                }

                img {
                    max-width: 100%;
                    border-radius: 8px;
                    -webkit-box-shadow: 7px -2px 26px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 7px -2px 26px 0px rgba(0,0,0,0.75);
                    box-shadow: 7px -2px 26px 0px rgba(0,0,0,0.75);
                }

                p {
                    text-align: justify;
                    font-family: 'Arial';
                }

                .card {
                    margin: 24px;
                    padding: 16px;
                    color: #757575;
                    border-radius: 5px;
                    background-color: #fff;
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                }

                .custom-parent {
                    font-size: 12px;
                  }
                  paper-input.custom:hover {
                    border: 1px solid #29B6F6;
                  }
                  paper-input.custom {
                    margin-bottom: 14px;
                    --primary-text-color: #01579B;
                    --paper-input-container-color: black;
                    --paper-input-container-focus-color: black;
                    --paper-input-container-invalid-color: black;
                    border: 1px solid #BDBDBD;
                    border-radius: 5px;
              
                    /* Reset some defaults */
                    --paper-input-container: { padding: 0;};
                    --paper-input-container-underline: { display: none; height: 0;};
                    --paper-input-container-underline-focus: { display: none; };
              
                    /* New custom styles */
                    --paper-input-container-input: {
                      box-sizing: border-box;
                      font-size: inherit;
                      padding: 4px;
                    };
                    --paper-input-container-input-focus: {
                      background: rgba(0, 0, 0, 0.1);
                    };
                    --paper-input-container-input-invalid: {
                      background: rgba(255, 0, 0, 0.3);
                    };
                    --paper-input-container-label: {
                      top: -8px;
                      left: 4px;
                      background: white;
                      padding: 2px;
                      font-weight: bold;
                    };
                    --paper-input-container-label-floating: {
                      width: auto;
                    }

                
            </style>
            <section class="conteiner">
                    <div class="item">
                        <div class="sub">
                            <h2>Acerca de Nosotros</h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dicta quidem accusamus rerum, iusto praesentium nulla error 
                            asperiores veniam cum quis iste officiis facere, nostrum, 
                            vel similique neque rem dolor. Nihil accusantium unde ad 
                            laborum error, omnis dolorem tempora pariatur libero quia, 
                            blanditiis hic minima officia nobis laudantium nemo! Maiores, tempore.
                            </p>
                        </div>
                        <div class="sub">
                            <img src="https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/content_image/2019/4/26/1556300535759-resena-el-espacio-entre-nosotros.001.jpeg" alt="Smiley face" >
                        </div>
                    </div>
                    <div class="item">
                        <h2>Ultimos Productos</h2>
                        <paper-card>
                            <div class="card-content">
                                <img src="http://placehold.it/350x150/FFC107/000000">
                            </div>
                        </paper-card>
                        <paper-card>
                            <div class="card-content">
                                <img src="http://placehold.it/350x150/FFC107/000000">
                            </div>
                        </paper-card>
                        <paper-card>
                            <div class="card-content">
                                <img src="http://placehold.it/350x150/FFC107/000000">
                            </div>
                        </paper-card>
                        <paper-card>
                            <div class="card-content">
                                <img src="http://placehold.it/350x150/FFC107/000000">
                            </div>
                        </paper-card>
                    </div>
                    <div class="item">
                        <h2>Sección Noticias</h2>
                    </div>
                    <div class="item">
                        <h2>Sección Marcas/Categorias</h2>
                    </div>
                    <div class="item card">
                        <h2> Suscripción Newsletter</h2>
                        <form>
                            <paper-input label="Nombre"></paper-input>
                            <paper-input label="Email"></paper-input>
                            <paper-button raised>Subscribir</paper-button>
                        </form>
                    </div>
            </section>
            
        `;
    }

    static get properties(){
        return{}
    }
}


window.customElements.define('my-principal',MyPrincipal);