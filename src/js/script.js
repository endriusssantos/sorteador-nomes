const form = document.getElementById("form");
const input = document.getElementById("input-name");
const btnDraw = document.getElementById("btn-draw");
const result = document.getElementById("result");

let names = [];

function getNamesFromInput() {
  const inputValue = input.value.trim();
  if (!inputValue) return [];

  return inputValue
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name !== "");
}

function addNames(newNames) {
  names = [...newNames];
  input.value = "";
}

function animateDraw() {
  const animationDuration = 2000;
  const intervalTime = 100;
  let elapsed = 0;

  const intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    result.textContent = `🎲 ${randomName}`;

    elapsed += intervalTime;
    if (elapsed >= animationDuration) {
      clearInterval(intervalId);
      const finalIndex = Math.floor(Math.random() * names.length);
      const finalName = names[finalIndex];
      result.textContent = `🎉 Nome sorteado: ${finalName}`;
    }
  }, intervalTime);
}

btnDraw.addEventListener("click", () => {
  const newNames = getNamesFromInput();

  if (newNames.length < 2) {
    result.textContent = "⚠️ Por favor, digite ao menos dois nomes!";
    return;
  }

  addNames(newNames);
  animateDraw();
});
