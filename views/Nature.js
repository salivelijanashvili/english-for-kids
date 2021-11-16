import AbstractView from "./AbstractView.js";
import getData from "../functions/getData.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Nature");
  }

  async getHtml() {
    return `
      <h1> Nature page </h1>
      </br>
      <div class="grid"> ${getData("Nature")} </div>
     `;
    }
}