const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customInput = document.getElementById('custom-input');
const peopleInput = document.getElementById('people');
let tipPercent = 0;

tipButtons.forEach( button => 
    button.addEventListener('click', () => {
        tipPercent = Number(button.textContent.replace('%', ''));
        console.log(tipPercent);

        customInput.value = "";
        calculateTip();
    })
)

billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

customInput.addEventListener('input' , () => {
    tipPercent = Number(customInput.value);

    console.log(tipPercent);
    calculateTip();
})

function calculateTip(){
    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);

    if(bill > 0 && people > 0 && tipPercent > 0){
        const tipAmount = (bill * (tipPercent/100)) / people;
        const totalAmount = (bill / people) + tipAmount;

        document.getElementById('tip-amount').textContent = `$${tipAmount.toFixed(2)}`;
        document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
    }
}