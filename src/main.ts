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
let rate: number = 0;

const tracker = document.createElement("div");
updateCounter();
app.append(tracker);

clickerButton.addEventListener("click", () => {
  plus(1);
});

const firstUpgrade = document.createElement("button");
const firstUpgradeCost: number = 10;
let firstUpgradeCount: number = 0;
firstUpgrade.innerHTML = `🍄 (${firstUpgradeCount})
Cost: ${firstUpgradeCost}`;
firstUpgrade.disabled = true;
app.append(firstUpgrade);

const secondUpgrade = document.createElement("button");
const secondUpgradeCost: number = 100;
let secondUpgradeCount: number = 0;
secondUpgrade.innerHTML = `🐦 (${secondUpgradeCount})
Cost: ${secondUpgradeCost}`;
secondUpgrade.disabled = true;
app.append(secondUpgrade);

const thirdUpgrade = document.createElement("button");
const thirdUpgradeCost: number = 1000;
let thirdUpgradeCount: number = 0;
thirdUpgrade.innerHTML = `🔌 (${thirdUpgradeCount})
Cost: ${thirdUpgradeCost}`;
thirdUpgrade.disabled = true;
app.append(thirdUpgrade);

firstUpgrade.addEventListener("click", () => {
  buyFor(firstUpgradeCost);
  firstUpgradeCount++;
  rate += 0.1;
  firstUpgrade.innerHTML = `🍄 (${firstUpgradeCount})
Cost: ${firstUpgradeCost}`;
});

secondUpgrade.addEventListener("click", () => {
  buyFor(secondUpgradeCost);
  secondUpgradeCount++;
  rate += 2;
  secondUpgrade.innerHTML = `🐦 (${secondUpgradeCount})
Cost: ${secondUpgradeCost}`;
});

thirdUpgrade.addEventListener("click", () => {
  buyFor(thirdUpgradeCost);
  thirdUpgradeCount++;
  rate += 50;
  thirdUpgrade.innerHTML = `🔌 (${thirdUpgradeCount})
Cost: ${thirdUpgradeCost}`;
});

window.requestAnimationFrame(clockPlus);

function updateCounter() {
  tracker.innerHTML = `${counter.toFixed(0)} messages / ${rate.toFixed(
    1,
  )} per second`;
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
  firstUpgrade.disabled = counter < firstUpgradeCost;
  secondUpgrade.disabled = counter < secondUpgradeCost;
  thirdUpgrade.disabled = counter < thirdUpgradeCost;

  window.requestAnimationFrame(clockPlus);
}
