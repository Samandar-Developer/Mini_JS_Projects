const loanForm = document.getElementById("loan-form");

loanForm.addEventListener("submit", function(e){
    document.getElementById("results").style.display = "none";
    
    document.getElementById("loader").style.display = "block";

    setTimeout(LoanCalculate, 1500);

    e.preventDefault()
});

function LoanCalculate(e){
    // UI VARs 
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");
    
    const principal = parseFloat(amount.value);
    const calculatedPayment = parseFloat(years.value) * 12;
    const calculatedInterest = parseFloat(interest.value) / 100 / 12 ;

    const x = Math.pow( 1+ calculatedInterest, calculatedPayment);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
        
        document.getElementById("results").style.display = "block";
        document.getElementById("loader").style.display = "none";
    } else {
        document.getElementById("results").style.display = "none";
        document.getElementById("loader").style.display = "none";
        showError("Please check your number inputs");
    }
}

function showError(errorMessage){
    const errorDiv = document.createElement("div");

    const card = document.querySelector(".card");
    const header = document.querySelector(".heading");

    errorDiv.classList = "alert alert-danger";

    errorDiv.appendChild(document.createTextNode(errorMessage));

    card.insertBefore(errorDiv, header);

    setTimeout(clearMessage, 2000);
}

function clearMessage(){
    document.querySelector(".alert").remove();
}



