let errorPurchase = document.getElementById("error-msg")
console.log(errorPurchase)

function purchase() {
    console.log("clicked")
    errorPurchase.textContent = "Something went wrong, please try again."
}