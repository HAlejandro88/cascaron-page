import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '../my-icons.js';


setPassiveTouchGestures(true);


setRootPath(MyAppGlobals.rootPath);
/**
 * @customElement
 * @polymer
 */
class HermesCascaronApp extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="principal" href="[[rootPath]]principal">Principal</a>
            <a name="nosotros" href="[[rootPath]]nosotros">Nosotros</a>
            <a name="productos" href="[[rootPath]]productos">Productos</a>
            <a name="contact" href="[[rootPath]]contact">Contacto</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">Hermes</div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-principal name="principal"></my-principal>
            <my-nosotros name="nosotros"></my-nosotros>
            <my-productos name="productos"></my-productos>
            <my-contact name="contact"></my-contact>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
      if (!page) {
        this.page = 'principal';
      } else if (['principal', 'nosotros', 'productos','contact'].indexOf(page) !== -1) {
        this.page = page;
      } else {
        this.page = 'view404';
      }

      // Close a non-persistent drawer when the page & route are changed.
      if (!this.$.drawer.persistent) {
        this.$.drawer.close();
      }
    }

    _pageChanged(page) {
      switch (page) {
        case 'principal':
          import('../my-principal/my-principal.js');
          break;
        case 'nosotros':
          import('../my-nosotros/my-nosotros.js');
          break;
        case 'productos':
          import('../my-productos/my-productos.js');
          break;
        case 'contact':
          import('../my-contact/my-contact.js');
          break;
        case 'view404':
          import('./my-view404.js');
          break;
      }
    }
}

window.customElements.define('hermes-cascaron-app', HermesCascaronApp);
