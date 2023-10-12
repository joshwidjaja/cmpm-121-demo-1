import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Don't Think About It (You Just Did)";
const clickerEmoji = "💬";

document.title = gameName;

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

const firstUpgrade = document.createElement("button");
let firstUpgradeCost: number = 10;
let firstUpgradeCount: number = 0;
firstUpgrade.innerHTML = `📄 <strong>Flyer</strong> (${firstUpgradeCount})
Cost: ${firstUpgradeCost}`;
firstUpgrade.disabled = true;
app.append(firstUpgrade);

const secondUpgrade = document.createElement("button");
let secondUpgradeCost: number = 100;
let secondUpgradeCount: number = 0;
secondUpgrade.innerHTML = `⏰ <strong>Periodic Announcement</strong> (${secondUpgradeCount})
Cost: ${secondUpgradeCost}`;
secondUpgrade.disabled = true;
app.append(secondUpgrade);

const thirdUpgrade = document.createElement("button");
let thirdUpgradeCost: number = 1000;
let thirdUpgradeCount: number = 0;
thirdUpgrade.innerHTML = `👥 <strong>Accomplice</strong> (${thirdUpgradeCount})
Cost: ${thirdUpgradeCost}`;
thirdUpgrade.disabled = true;
app.append(thirdUpgrade);

firstUpgrade.addEventListener("click", () => {
  buyFor(firstUpgradeCost);
  firstUpgradeCount++;
  firstUpgradeCost *= 1.15;
  rate += 0.1;
  firstUpgrade.innerHTML = `📄 <strong>Flyer</strong> (${firstUpgradeCount})
  Cost: ${firstUpgradeCost.toFixed(0)}`;
});

secondUpgrade.addEventListener("click", () => {
  buyFor(secondUpgradeCost);
  secondUpgradeCount++;
  secondUpgradeCost *= 1.15;
  rate += 2;
  secondUpgrade.innerHTML = `⏰ <strong>Periodic Announcement</strong> (${secondUpgradeCount})
  Cost: ${secondUpgradeCost.toFixed(0)}`;
});

thirdUpgrade.addEventListener("click", () => {
  buyFor(thirdUpgradeCost);
  thirdUpgradeCount++;
  thirdUpgradeCost *= 1.15;
  rate += 50;
  thirdUpgrade.innerHTML = `👥 <strong>Accomplice</strong> (${thirdUpgradeCount})
  Cost: ${thirdUpgradeCost.toFixed(0)}`;
});

window.requestAnimationFrame(clockPlus);

function updateCounter() {
  tracker.innerHTML = `${counter.toFixed(0)} losses / ${rate.toFixed(
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
