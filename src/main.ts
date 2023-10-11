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
//let firstUpgradeCount = 0;

const tracker = document.createElement("div");
tracker.innerHTML = `${counter} messages`;
app.append(tracker);

clickerButton.addEventListener("click", () => {
  plus(1);
});

const firstUpgrade = document.createElement("button");
const firstUpgradeCost: number = 10;
firstUpgrade.innerHTML = `🍄
Cost: ${firstUpgradeCost}`;
firstUpgrade.disabled = true;
app.append(firstUpgrade);

let rate: number = 0;

firstUpgrade.addEventListener("click", () => {
  //firstUpgradeCount++;
  buyFor(firstUpgradeCost);
  rate += 1;
});

window.requestAnimationFrame(clockPlus);

function plus(num: number) {
  counter += num;
  tracker.innerHTML = `${counter} messages`;
}

function buyFor(cost: number) {
  counter -= cost;
  tracker.innerHTML = `${counter} messages`;
}

function clockPlus() {
  const num: number = rate / 60;
  plus(num);
  firstUpgrade.disabled = counter < firstUpgradeCost;
  window.requestAnimationFrame(clockPlus);
}
