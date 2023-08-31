import { LitElement, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { styles } from "./styles";
import circle from "../../assets/check-circle.png";

interface formDataProps {
  razao: string;
  fantasia: string;
  CpfCnpj: string;
  email: string;
}

@customElement("my-toast-test")
export class MyElement extends LitElement {
  static get styles() {
    return [styles];
  }

  connectedCallback() {
    super.connectedCallback();
    // Acesso ao elemento usando this.shadowRoot.querySelector
    const targetElement = this.shadowRoot?.querySelector(".toast");
    if (targetElement instanceof HTMLElement) {
      // Faça algo com o elemento encontrado
      setTimeout(function () {
        targetElement.animate(
          [
            { transform: "translateY(0px)" },
            { transform: "translateY(-300px)" },
          ],
          {
            duration: 3000,
            iterations: 1,
          }
        );
      }, 50);
      setTimeout(function () {
        targetElement.style.display = "none";
      }, 3000);
      // targetElement.style.backgroundColor = "red";
    }
  }

  render() {
    return html`
      <div class="toast">
        <img src=${circle} />
        <p>Mensagem genérica!</p>
      </div>
    `;
  }
}
