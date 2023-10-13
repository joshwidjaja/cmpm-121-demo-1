import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Don't Think About It (You Just Did)";
const clickerEmoji = "💬";

document.title = gameName;

interface Item {
  emoji: string;
  name: string;
  cost: number;
  rate: number;
  count: number;
}

const availableItems: Item[] = [
  { emoji: "📄", name: "Flyer", cost: 10, rate: 0.1, count: 0 },
  { emoji: "🔊", name: "Timed Speaker", cost: 100, rate: 2, count: 0 },
  { emoji: "👥", name: "Accomplice", cost: 1000, rate: 50, count: 0 },
];

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const clickerButton = document.createElement("button");
clickerButton.innerHTML = `${clickerEmoji} Tell Someone Else`;
app.append(clickerButton);

let counter: number = 0;
let rate: number = 0;

const tracker = document.createElement("h2");
updateCounter();
app.append(tracker);

clickerButton.addEventListener("click", () => {
  plus(1);
});

const flyer = availableItems[0];
const flyerButton = document.createElement("button");
updateUpgrade(flyer, flyerButton);
flyerButton.disabled = true;
app.append(flyerButton);

const speaker = availableItems[1];
const speakerButton = document.createElement("button");
updateUpgrade(speaker, speakerButton);
speakerButton.disabled = true;
app.append(speakerButton);

const partner = availableItems[2];
const partnerButton = document.createElement("button");
updateUpgrade(partner, partnerButton);
partnerButton.disabled = true;
app.append(partnerButton);

flyerButton.addEventListener("click", () => {
  buyItem(flyer, flyerButton);
});

speakerButton.addEventListener("click", () => {
  buyItem(speaker, speakerButton);
});

partnerButton.addEventListener("click", () => {
  buyItem(partner, partnerButton);
});

window.requestAnimationFrame(clockPlus);

function updateCounter() {
  tracker.innerHTML = `${counter.toFixed(0)} losses<br>${rate.toFixed(
    1,
  )} per second`;
}

function updateUpgrade(item: Item, button: HTMLButtonElement) {
  button.innerHTML = `${item.emoji} <strong>${item.name}</strong> (${
    item.count
  })
  <br>Cost: ${item.cost.toFixed(0)}`;
}

function buyItem(item: Item, button: HTMLButtonElement) {
  buyFor(item.cost);
  item.count++;
  item.cost *= 1.15;
  rate += item.rate;
  updateUpgrade(item, button);
}

function plus(num: number) {
  counter += num;
  updateCounter();
}

function buyFor(cost: number) {
  counter -= cost;
  updateCounter();
}

function clockPlus() {
  const num: number = rate / 60;
  plus(num);
  flyerButton.disabled = counter < flyer.cost;
  speakerButton.disabled = counter < speaker.cost;
  partnerButton.disabled = counter < partner.cost;

  window.requestAnimationFrame(clockPlus);
}
