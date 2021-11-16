import AbstractView from "./AbstractView.js";
import cards from "../data/cards.js";
cards.shift();

const actionSetA = cards[0].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)

const actionSetB = cards[1].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)

const animalSetA = cards[2].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)

const animalSetB = cards[3].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)

const clothes = cards[4].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)

const emotions = cards[5].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)

const nature = cards[6].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)

const colors = cards[7].map((component) => 
` <tbody>
    <tr>
      <td>${component.word}</td>
      <td>${component.translation}</td>
      <td>${component.georgian}</td>
    </tr>
  </tbody>
`)
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dictionary");
  }

  async getHtml() {
    return `
      <h1> Dictonary </h1>
      <h2> Action Set (A) </h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">English</th>
            <th scope="col">Russian</th>
            <th scope="col">Georgian</th>
          </tr>
        </thead>
      ${actionSetA}
      </table>
      <table class="table">
      <h2> Action Set (B) </h2>
        <thead>
        <tr>
          <th scope="col">English</th>
          <th scope="col">Russian</th>
          <th scope="col">Georgian</th>
        </tr>
        </thead>
      ${actionSetB}
      </table>
      <h2> Animal Set (A) </h2>
      <table class="table">
      <thead>
      <tr>
        <th scope="col">English</th>
        <th scope="col">Russian</th>
        <th scope="col">Georgian</th>
      </tr>
      </thead>
      ${animalSetA}
      </table>
      <h2> Animal Set (B) </h2>
      <table class="table">
      <thead>
      <tr>
        <th scope="col">English</th>
        <th scope="col">Russian</th>
        <th scope="col">Georgian</th>
      </tr>
      </thead>
      ${animalSetB}
      </table>
      <h2> Clothes </h2>
      <table class="table">
      <thead>
      <tr>
        <th scope="col">English</th>
        <th scope="col">Russian</th>
        <th scope="col">Georgian</th>
      </tr>
      </thead>
      ${clothes}
      </table>
      <h2> Emotions </h2>
      <table class="table">
      <thead>
      <tr>
        <th scope="col">English</th>
        <th scope="col">Russian</th>
        <th scope="col">Georgian</th>
      </tr>
      </thead>
      ${emotions}
      </table>
      <h2> Nature </h2>
      <table class="table">
      <thead>
      <tr>
        <th scope="col">English</th>
        <th scope="col">Russian</th>
        <th scope="col">Georgian</th>
      </tr>
      </thead>
      ${nature}
      </table>
      <h2> Colors </h2>
      <table class="table">
      <thead>
      <tr>
        <th scope="col">English</th>
        <th scope="col">Russian</th>
        <th scope="col">Georgian</th>
      </tr>
      </thead>
      ${colors}
      </table>
    `;
  }
}