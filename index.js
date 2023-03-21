const statusDisplay = document.querySelector('.game--status');
const optionForm = document.querySelector('.option--form');
const submitButton = document.getElementById('formSubmit')

// const playerIcon = 

optionForm.addEventListener(
    "submit", (e) => {
        const optionData = new FormData(optionForm);
        for (const entry of optionData) {
            console.log(entry);
        }
        submitButton.disabled = true;
        e.preventDefault();
    }
)
let gameLoop = true;
