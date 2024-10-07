/**
 * WhatsApp Floating Icon Web Component
 * @author Gustavo Novaro
 * @version 1.0.1
 *
 * Usage
 * <whatsapp-icon position="bottom-right" phone="1234567890" title="¡Chatea con nosotros en WhatsApp!"></whatsapp-icon>
 *
 * Puedes cambiar el valor del atributo position a bottom-left, top-right o top-left para mover el icono a diferentes esquinas de la página.
 * Recuerda que este código asume que tienes acceso a la imagen de WhatsApp desde la URL especificada en el estilo.
 * Asegúrate de utilizar una URL que tengas permiso para usar o de alojar la imagen tú mismo.
 *
 */
class WhatsAppIcon extends HTMLElement {
    static get observedAttributes() {
        return ['phone', 'position', 'title'];
    }

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        // Set position from attribute or use bottom right corner by default
        const position = this.getAttribute('position') || 'bottom-right';

        // Set phone number from an attribute
        const phoneNumber = this.getAttribute('phone') || 'XXXXXXXXXXX';

        // Title is optional
        const title = this.getAttribute('title') || '';

        // Agregar el estilo y el enlace
        this._shadowRoot.innerHTML = `
      <style>
        .whatsapp-icon {
          width: 48px;
          height: 48px;
          position: fixed;
          cursor: pointer;
          ${position === 'bottom-right' ? 'bottom: 20px; right: 20px;' : ''}
          ${position === 'bottom-left' ? 'bottom: 20px; left: 20px;' : ''}
          ${position === 'top-right' ? 'top: 20px; right: 20px;' : ''}
          ${position === 'top-left' ? 'top: 20px; left: 20px;' : ''}
        }
      </style>
      <a href="https://wa.me/${phoneNumber}" target="_blank" title="${title}">
        <div class="whatsapp-icon">
            <svg width="36" height="36" fill="none">
            <path d="M1.757 34.14l2.304-8.394a16.177 16.177 0 01-2.167-8.087c0-8.923 7.268-16.192 16.191-16.192 4.334 0 8.395 1.69 11.466 4.743a16.109 16.109 0 014.743 11.449c0 8.923-7.268 16.191-16.192 16.191-2.712 0-5.374-.682-7.746-1.979l-8.599 2.27z" fill="url(#1_paint0_linear)"></path><path fill="url(#1_pattern0)" d="M0 0h36v36H0z"></path><path d="M1.177 34.72l2.389-8.684a16.736 16.736 0 01-2.235-8.377C1.314 8.394 8.838.87 18.085.87c4.488 0 8.702 1.74 11.875 4.914a16.673 16.673 0 014.914 11.875c0 9.247-7.524 16.771-16.772 16.771-2.815 0-5.562-.7-8.019-2.047L1.177 34.72zm9.299-5.357l.512.307a13.955 13.955 0 007.097 1.945c7.678 0 13.94-6.261 13.94-13.94 0-3.719-1.45-7.233-4.078-9.86a13.89 13.89 0 00-9.862-4.096C10.39 3.72 4.13 9.981 4.13 17.66c0 2.627.734 5.204 2.133 7.422l.324.529-1.416 5.152 5.306-1.399z" fill="url(#1_paint1_linear)"></path><path fill="url(#1_pattern1)" d="M8.019 8.531h20.133v18.938H8.019z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.905 10.63c-.307-.7-.648-.717-.938-.717-.256-.017-.53-.017-.82-.017-.272 0-.733.102-1.125.529-.393.426-1.467 1.433-1.467 3.497 0 2.065 1.501 4.061 1.706 4.334.204.273 2.9 4.64 7.166 6.33 3.548 1.399 4.265 1.126 5.033 1.04.767-.085 2.474-1.006 2.832-1.996.341-.972.341-1.825.239-1.996-.102-.17-.393-.273-.802-.495-.427-.204-2.474-1.228-2.866-1.365-.393-.136-.666-.204-.939.205-.273.427-1.075 1.365-1.33 1.638-.24.273-.495.307-.905.102-.426-.204-1.774-.648-3.378-2.081-1.246-1.11-2.082-2.491-2.338-2.9-.238-.427-.034-.649.188-.854.188-.187.427-.494.632-.733.204-.24.272-.427.426-.7.136-.273.068-.529-.034-.733-.103-.188-.904-2.253-1.28-3.089z" fill="#fff"></path><defs><linearGradient id="1_paint0_linear" x1="18.022" y1="34.139" x2="18.022" y2="1.461" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><linearGradient id="1_paint1_linear" x1="18.022" y1="34.724" x2="18.022" y2="0.875" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><pattern id="1_pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#1_image0"></use></pattern><pattern id="1_pattern1" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#1_image1"></use></pattern><image id="1_image0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADTCAYAAAAbBybZAAAACXBIWXMAAAsSAAALEgHS3X78AAAA"></image><image id="1_image1" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABvCAYAAAA5fjRCAAAACXBIWXMAAAsSAAALEgHS3X78AAAA"></image></defs>
            </svg>
        </div>
      </a>
    `;
    }
}

// Register new element
customElements.define("whatsapp-icon", WhatsAppIcon);
