const box = document.querySelector('.typing');
const text = ["Wow!^I'm glad you're here.^I like talking to people!", "What's your name?^Maybe John?^I've met John once. He is awesome!", "Unfortunately, his wife told him to go away from monitor.^Now I'm lonely :("];
let letterIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 100; //bigger number => slower animation
const stop = 2000; //time between texts
let activeDOMElement = box;

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    oldTime = newTime;

    const letter = text[textIndex].substr(letterIndex, 1);

    if (letterIndex === text[textIndex].length) {
      if (textIndex === text.length - 1) {
        return;
      }

      return setTimeout(() => {
        box.textContent = '';
        textIndex++;
        letterIndex = 0;

        requestAnimationFrame(typing)
      }, stop)
    } else if (letterIndex === 0 || letter === "^") {
      const p = document.createElement('p');
      box.appendChild(p);
      activeDOMElement = p;
    }

    if (!(letter === "^")) {
      activeDOMElement.textContent += letter;
    }
    letterIndex++;
  }
  requestAnimationFrame(typing);
}

typing();