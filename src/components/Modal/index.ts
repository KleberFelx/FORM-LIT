import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { styles } from "./styles";

@customElement("my-modal")
export class MyElement extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    const dataOficinas = {
      razao: [
        {
          name: "Oficina do Klebão",
        },
        {
          name: "Oficina do Klebada",
        },
        {
          name: "Oficina do Klebada",
        },
      ],
      fantasia: [
        {
          name: "Oficina do Klebão",
        },
        {
          name: "Oficina do Klebada",
        },
        {
          name: "Oficina do Klebada",
        },
      ],
      CpfCnpj: [
        {
          name: "4440004444",
        },
        {
          name: "4440004444",
        },
        {
          name: "4440004444",
        },
      ],
      email: [
        {
          name: "kleber@copart.com",
        },
        {
          name: "kleber@copart.com",
        },
        {
          name: "kleber@copart.com",
        },
      ],
    };

    console.log(dataOficinas);

    return html`
      <div class="modal">
        <header>
          <h3>Mesclar Oficinas</h3>
        </header>

        <main>
          <div class="selection">
            <p>Chave</p>
            <button>Selecionar todos</button>
            <button>Selecionar todos</button>
            <p>Resultado</p>
          </div>

          <hr class="partition" />

          <div class="dataWorkshops">
            <p>Razão</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} />${item.name}</div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>Fantasia</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>Cpf | Cnpj</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>E-mail</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>Im</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>ie</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>CpfMei</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>Requer pag/ adiantado</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>Requer nota fiscal</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>Telefone</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>
          <div class="dataWorkshops">
            <p>Telefone 2</p>
            ${dataOficinas.razao.map(
              (item) => html` <div class="colors"><input type="radio" value=${item.name} /></div> `
            )}
          </div>

          <footer>
            <button>Voltar</button>
            <button>Mesclar</button>
          </footer>
        </main>
      </div>
    `;
  }
}
