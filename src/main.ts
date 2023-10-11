import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "cmpm121 D1";
const clickerEmoji = "🤖";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const clickerButton = document.createElement("button");
clickerButton.innerHTML = clickerEmoji;
app.append(clickerButton);

let counter: number = 0;
const tracker = document.createElement("div");
tracker.innerHTML = `${counter} messages`;
app.append(tracker);

clickerButton.addEventListener("click", () => {
  plus(1);
});

window.requestAnimationFrame(clockPlus);

function plus(num: number) {
  counter += num;
  tracker.innerHTML = `${counter} messages`;
}

function clockPlus() {
  const num: number = 1 / 60;
  plus(num);
  window.requestAnimationFrame(clockPlus);
}
