import AbstractView from "./AbstractView.js";
import getData from "../functions/getData.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("ActionSetB");
  }

  async getHtml() {
    return `
        <h1> ActionSetB page </h1>
        </br>
        <div class="grid"> ${getData("ActionSetB")} </div>
    `;
  }
}