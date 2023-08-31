import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./styles";
import checkImg from "../../assets/Featured icon.svg";
import errorImg from "../../assets/error.svg";

@customElement("my-toast")
export class MyElement extends LitElement {
  static get styles() {
    return [styles];
  }

  @property() status: String = "Sucesso";

  render() {
    const messagesSucess = {
      img: checkImg,
      title: "Tarefa criado com sucesso!",
      text: "A tarefa foi criada com êxito, visualize os detalhes na página de tarefas",
    };

    const messagesError = {
      img: errorImg,
      title: "Há um problema com essa ação",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };

    return html`
      <div class="background">
        <div class="toast">
          <img
            src=${this.status === "Sucesso"
              ? messagesSucess.img
              : messagesError.img}
          />

          <h3>
            ${this.status === "Sucesso"
              ? messagesSucess.title
              : messagesError.title}
          </h3>
          <span
            >${this.status === "Sucesso"
              ? messagesSucess.text
              : messagesError.text}</span
          >

          <div class="buttons">
            <button>Cancelar</button>
            <button>Confirmar</button>
          </div>
        </div>
      </div>
    `;
  }
}
