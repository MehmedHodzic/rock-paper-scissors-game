const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("result-text");
const computerChoiceText = document.getElementById("computer-icon");

for (const button of buttons) {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const winner = getWinner(userChoice, computerChoice);
        showResult(userChoice, computerChoice, winner);
        playAgainButton.style.display = "block";
    });
}

playAgainButton.addEventListener("click", () => {
    resultDiv.classList.add("hidden");
    buttons.forEach((button) => {
        button.disabled = false;
    });
    computerChoiceText.innerHTML = '';
    playAgainButton.style.display = "none";
});

function getWinner(user, computer) {
    if (user === computer) return "Neriješeno!";
    if ((user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")) {
        return "Pobjeda!";
    }
    return "Gubitak.";
}

function showResult(user, computer, winner) {
    resultText.textContent = `Vi ste odabrali ${user}, računalo je odabralo ${computer}. ${winner}`;
    computerChoiceText.innerHTML = `<i class="fas fa-hand-${computer}"></i>`;
    resultDiv.classList.remove("hidden");
    buttons.forEach((button) => {
        button.disabled = true;
    });
}
