import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "cmpm121 D1";
const clickerEmoji = "🤖";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

const clickerButton = document.createElement("button");
clickerButton.innerHTML = clickerEmoji;

let counter: number = 0;
const tracker = document.createElement("div");
tracker.innerHTML = `${counter} messages`;

clickerButton.addEventListener('click', () => {
    counter = counter + 1;
    tracker.innerHTML = `${counter} messages`;
});

app.append(header);
app.append(clickerButton);
app.append(tracker);
