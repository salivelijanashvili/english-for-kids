import cards from '../data/cards.js'

// cards.shift();

function playAudio(url) {
  new Audio(url).play();
}

const getData = dataCategory => {

    let indexOfCategory = 0;

    if (dataCategory === "ActionSetA") {
      indexOfCategory = 0; 
    }
    if (dataCategory === "ActionSetB") {
      indexOfCategory = 1; 
    }
    if (dataCategory === "AnimalSetA") {
      indexOfCategory = 2;
    }
    if (dataCategory === "AnimalSetB") {
      indexOfCategory = 3;
    }
    if (dataCategory === "Clothes") {
      indexOfCategory = 4;
    }
    if (dataCategory === "Emotions") {
      indexOfCategory = 5;
    }
    if (dataCategory === "Nature") {
      indexOfCategory = 6;
    }
    if (dataCategory === "Colors") {
      indexOfCategory = 7;
    }

console.log(cards[1]);

    return cards[indexOfCategory].map((component) => `
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="card" id="card-section" onclick="${playAudio(`${component.audioSrc}`)}" style="width: 18rem;" >
            <img src="${component.image}"  style="width: 18rem; height: 15rem;" class="card-img-top" alt="img">
            <div class="card-body">
                <p class="card-text">
                  ${component.word}
                </p>
            </div>
            <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238"></path>
            </svg>
    </div>
    <div class="flip-card-back">
        <div class="card" id="card-section" style="width: 18rem;" >
            <img src="${component.image}"  style="width: 18rem; height: 15rem;" class="card-img-top" alt="img">
            <div class="card-body">
                <p class="card-text">${component.georgian} / ${component.translation} </p>
            </div>
        </div>
    </div>
    </div>
    </div>
    `);
}


export default getData;