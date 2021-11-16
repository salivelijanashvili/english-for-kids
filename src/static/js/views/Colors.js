import AbstractView from "./AbstractView.js";
import getData from "../functions/getData.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Colors");
  }
  
  async getHtml() {
    return `
      <h1> Colors page </h1>
      </br>
      <div class="grid"> ${getData("Colors")} </div>
    `;
  }
}