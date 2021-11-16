import Main from "./views/Main.js";
import Dictionary from "./views/Dictionary.js";
import ActionSetA from "./views/ActionSetA.js";
import ActionSetB from "./views/ActionSetB.js";
import AnimalSetA from "./views/AnimalSetA.js";
import AnimalSetB from "./views/AnimalSetB.js";
import Clothes from "./views/Clothes.js";
import Emotions from "./views/Emotions.js";
import Nature from "./views/Nature.js";
import Colors from "./views/Colors.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
    }));
};

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    { path: "/", view: Main },
    { path: "/dictionary", view: Dictionary },
    { path: "/ActionSetA", view: ActionSetA },
    { path: "/ActionSetB", view: ActionSetB },
    { path: "/AnimalSetA", view: AnimalSetA },
    { path: "/AnimalSetB", view: AnimalSetB },
    { path: "/Clothes",  view: Clothes },
    { path: "/Emotions", view: Emotions },
    { path: "/Nature", view: Nature },
    { path: "/Colors", view: Colors },
  ];
  // Test each route for potential match
const potentialMatches = routes.map(route => {
  return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
  };
});

let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
        route: routes[0],
        result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
});

  router();

});