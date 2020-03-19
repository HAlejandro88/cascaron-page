import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-button/paper-button.js';


class MyNosotros extends PolymerElement {
    static get template() {
        return html`
            <style>
            </style>

            <div>
                <h1>Nosotros</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut praesentium saepe quos architecto quod adipisci! 
                    Nobis et facere fuga veniam suscipit voluptatem distinctio autem earum, cumque aut iste illum similique perspiciatis error ipsam ullam. 
                    Non impedit tenetur, reprehenderit cupiditate in dolore natus aliquid consectetur a ducimus, deserunt quam fugiat dolor libero laborum officiis animi quo, 
                    officia odio! Deleniti reprehenderit tenetur sit, dicta quidem aliquid, porro id, inventore autem a praesentium exercitationem 
                    impedit eaque numquam deserunt iste saepe dolor modi.
                </p>
            </div>
        `;
    }

    static get properties() {
        return{}
    }
}

window.customElements.define('my-nosotros',MyNosotros);
