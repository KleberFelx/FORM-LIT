import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styles } from "./styles";
import img from "../../assets/menu-hamburguer.svg";

@customElement("sidebar-lit")
export class MyElement extends LitElement {
  static get styles() {
    return [styles];
  }

  @state() Active: boolean = false;

  @property() sideBar: any;

  hancleClick() {
    this.Active = !this.Active;
  }

  handlePageClick(page:string) {
    const customEvent = new CustomEvent("sidebar-click", { detail: page });

    this.dispatchEvent(customEvent);
  }

  render() {
    return html`
      <aside class=${this.Active ? "large" : ""}>
        <img @click=${this.hancleClick} src=${img} />

        <div class=${this.Active ? "items" : "none"}>
          ${this.sideBar.map((item:any) => html` <button @click=${() =>this.handlePageClick(item.title)}>${item.title}</button> `)}
        </div>
      </aside>
    `;
  }
}
