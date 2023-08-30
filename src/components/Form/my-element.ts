import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "../Sidebar";
import "../Modal";
import { styles } from "./styles";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

interface FormDateProps {
  name: String;
  lastName: String;
  email: String;
  tel: String;
  address: String;
  message: String;
}

@customElement("my-element")
export class MyElement extends LitElement {
  static get styles() {
    return [styles];
  }

  @state() errorRequired: Record<string, boolean> = {};

  @state() formData: FormDateProps | any = {
    name: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
    message: "",
  };

  @state() spanRequired: any = "Campo Obrigatório";

  handleChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;
    this.formData = { ...this.formData, [name]: value };
  }

  private onSubmit(e: Event) {
    e.preventDefault();
    const fieldsWithErrors: Record<string, boolean> = {};

    for (const [key, value] of Object.entries(this.formData)) {
      if (value === "") {
        fieldsWithErrors[key] = true;
      }
    }

    this.errorRequired = fieldsWithErrors;
  }

  @state() siderBar: any = [
    {
      id: 1,
      title: "Home",
      component: "<my-element></my-element>",
    },
    {
      id: 2,
      title: "Modal",
      component: "<my-modal></my-modal>",
    },
  ];

  @state() page: string = "Home";

  render() {
    const sideBarTeste = [
      {
        id: 1,
        title: "Home",
        component: "<my-element></my-element>",
      },
      {
        id: 2,
        title: "Modal",
        component: "<my-modal></my-modal>",
      },
    ];

    const outlet = sideBarTeste.filter(
      (item: any) => item.title === this.page
    )[0].title;

    return html`
      <div class="flex">
        <sidebar-lit
          @sidebar-click=${(e: any) => (this.page = e.detail)}
          .sideBar=${this.siderBar}
        ></sidebar-lit>

        ${outlet != "Home"
          ? html` <div>
              <h1>Contate-nos</h1>
              <form class="form">
                <div class="inputValidation">
                  <input
                    class=${this.errorRequired.name ? "required" : ""}
                    name="name"
                    placeholder="Nome"
                    value=${String(this.formData.name)}
                    @input=${this.handleChange}
                  />
                  <span
                    id="span"
                    class=${this.errorRequired.name ? "spanRequired" : "none"}
                    >${this.spanRequired}</span
                  >
                </div>

                <div class="inputValidation">
                  <input
                    class=${this.errorRequired.lastName ? "required" : ""}
                    name="lastName"
                    placeholder="Sobrenome"
                    @input=${this.handleChange}
                    value=${String(this.formData.lastName)}
                  />
                  <span
                    id="span"
                    class=${this.errorRequired.lastName
                      ? "spanRequired"
                      : "none"}
                    >${this.spanRequired}</span
                  >
                </div>

                <div class="inputValidation">
                  <input
                    class=${this.errorRequired.email ? "required" : ""}
                    name="email"
                    placeholder="Email"
                    @input=${this.handleChange}
                    value=${String(this.formData.email)}
                  />
                  <span
                    id="span"
                    class=${this.errorRequired.email ? "spanRequired" : "none"}
                    >${this.spanRequired}</span
                  >
                </div>

                <div class="inputValidation">
                  <input
                    class=${this.errorRequired.tel ? "required" : ""}
                    name="tel"
                    placeholder="Telefone"
                    @input=${this.handleChange}
                    value=${String(this.formData.tel)}
                  />
                  <span
                    id="span"
                    class=${this.errorRequired.tel ? "spanRequired" : "none"}
                    >${this.spanRequired}</span
                  >
                </div>

                <div id="adress" class="inputValidation">
                  <input
                    class=${this.errorRequired.address ? "required" : ""}
                    name="address"
                    placeholder="Endereço"
                    @input=${this.handleChange}
                    value=${String(this.formData.address)}
                  />
                  <span
                    id="span"
                    class=${this.errorRequired.address
                      ? "spanRequired"
                      : "none"}
                    >${this.spanRequired}</span
                  >
                </div>

                <div id="area" class="inputValidation">
                  <textarea
                    class=${this.errorRequired.message ? "required" : ""}
                    name="message"
                    placeholder="Digite sua mensagem aqui"
                    @input=${this.handleChange}
                    value=${String(this.formData.message)}
                  ></textarea>
                  <span
                    id="span"
                    class=${this.errorRequired.message
                      ? "spanRequired"
                      : "none"}
                    >${this.spanRequired}</span
                  >
                </div>

                <button @click=${this.onSubmit}>Enviar</button>
              </form>
            </div>`
          : html`<my-modal></my-modal>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
