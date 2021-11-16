import AbstractView from "./AbstractView.js";
import getData from "../functions/getData.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("ActionSetA");
  }

  async getHtml() {
    return `
    <h1> ActionSetA page </h1>
    </br>
    <div class="grid"> ${getData("ActionSetA")} </div>
    `;
    }
}