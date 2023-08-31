import { LitElement, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import "../Toast";
import { styles } from "./styles";

interface formDataProps {
  razao: string;
  fantasia: string;
  CpfCnpj: string;
  email: string;
}

@customElement("my-modal")
export class MyElement extends LitElement {
  static get styles() {
    return [styles];
  }

  @state() formData: formDataProps = {
    razao: "",
    fantasia: "",
    CpfCnpj: "",
    email: "",
  };

  // @property({type: String}) toast = 'toast'

  handleChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;

    this.formData = { ...this.formData, [name]: value };

    console.log(this.formData);
  }

  render() {
    const dataOficinas = {
      razao: [
        {
          name: "Oficina do Klebão",
          group: "razao",
        },
        {
          name: "Oficina do Klebada",
          group: "razao",
        },
      ],
      fantasia: [
        {
          name: "Oficina do Klebão",
          group: "fantasia",
        },
        {
          name: "Oficina do Klebão",
          group: "fantasia",
        },
      ],
      CpfCnpj: [
        {
          name: "4440004444",
          group: "CpfCnpj",
        },
        {
          name: "4440004444",
          group: "CpfCnpj",
        },
      ],
      email: [
        {
          name: "kleber@copart.com",
          group: "email",
        },
        {
          name: "kleber12@copart.com",
          group: "email",
        },
      ],
    };

    return html`
      <my-toast></my-toast>
      <div class="modal">
        <header>
          <h3>MESCLAR OFICINAS</h3>
        </header>

        <main>
          <div class="selection">
            <p>CHAVE</p>
            <button @click=${this.connectedCallback}>SELECIONAR TODOS</button>
            <button>SELECIONAR TODOS</button>
            <p>RESULTADO</p>
          </div>

          <hr class="partition" />

          <div class="dataWorkshops">
            <p>RAZÂO</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div
                    class=${dataOficinas.razao[0].name ===
                    dataOficinas.razao[1].name
                      ? "colors colorsEqual"
                      : item.name === this.formData.razao
                      ? "colors colorsSelected"
                      : "colors"}
                  >
                    <input
                      @input=${this.handleChange}
                      type="radio"
                      name=${item.group}
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
            <div class="colors colorResult">${this.formData.razao}</div>
          </div>
          <div class="dataWorkshops">
            <p>FANTASIA</p>
            ${dataOficinas.fantasia.map(
              (item) =>
                html`
                  <div
                    class=${dataOficinas.fantasia[0].name ===
                    dataOficinas.fantasia[1].name
                      ? "colors colorsEqual"
                      : item.name === this.formData.fantasia
                      ? "colors colorsSelected"
                      : "colors"}
                  >
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      ?disabled=${dataOficinas.fantasia[0].name ===
                      dataOficinas.fantasia[1].name}
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
            <div class="colors colorResult">
              ${dataOficinas.fantasia[0].name === dataOficinas.fantasia[1].name
                ? dataOficinas.fantasia[0].name
                : this.formData.fantasia}
            </div>
          </div>
          <div class="dataWorkshops">
            <p>CPF | CNPJ</p>
            ${dataOficinas.CpfCnpj.map(
              (item) =>
                html`
                  <div
                    class=${dataOficinas.CpfCnpj[0].name ===
                    dataOficinas.CpfCnpj[1].name
                      ? "colors colorsEqual"
                      : item.name === this.formData.CpfCnpj
                      ? "colors colorsSelected"
                      : "colors"}
                  >
                    <input
                      type="radio"
                      @input=${this.handleChange}
                      ?disabled=${dataOficinas.CpfCnpj[0].name ===
                      dataOficinas.CpfCnpj[1].name}
                      name=${item.group}
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
            <div class="colors colorResult">
              ${dataOficinas.CpfCnpj[0].name === dataOficinas.CpfCnpj[1].name
                ? dataOficinas.CpfCnpj[0].name
                : this.formData.CpfCnpj}
            </div>
          </div>
          <div class="dataWorkshops">
            <p>E-MAIL</p>
            ${dataOficinas.email.map(
              (item) =>
                html`
                  <div
                    class=${dataOficinas.email[0].name ===
                    dataOficinas.email[1].name
                      ? "colors colorsEqual"
                      : item.name === this.formData.email
                      ? "colors colorsSelected"
                      : "colors"}
                  >
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
            <div class="colors colorResult">
              ${this.formData.email === dataOficinas.email[0].name
                ? dataOficinas.email[0].name
                : this.formData.email}
            </div>
          </div>
          <div class="dataWorkshops">
            <p>IM</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div class="colors">
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
          </div>
          <div class="dataWorkshops">
            <p>IE</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div class="colors">
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
          </div>
          <div class="dataWorkshops">
            <p>CPFMEI</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div class="colors">
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
          </div>
          <div class="dataWorkshops">
            <p>REQUER PAG/ ADIANTADO</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div class="colors">
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
          </div>
          <div class="dataWorkshops">
            <p>REQUER NOTA FISCAL</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div class="colors">
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
          </div>
          <div class="dataWorkshops">
            <p>TELEFONE</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div class="colors">
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
          </div>
          <div class="dataWorkshops">
            <p>TELEFONE 2</p>
            ${dataOficinas.razao.map(
              (item) =>
                html`
                  <div class="colors">
                    <input
                      @input=${this.handleChange}
                      name=${item.group}
                      type="radio"
                      value=${item.name}
                    />${item.name}
                  </div>
                `
            )}
          </div>

          <footer>
            <button>VOLTAR</button>
            <button>MESCLAR</button>
          </footer>
        </main>
      </div>
    `;
  }
}
