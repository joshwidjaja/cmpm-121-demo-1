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
  plusOne();
});

setInterval(plusOne, 1000);

function plusOne() {
  counter = counter + 1;
  tracker.innerHTML = `${counter} messages`;
}
