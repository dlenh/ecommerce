if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    const removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        const button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem)
    }

    const quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener("change", quantityChange)
    }
}

function removeCartItem(event) {
    const buttonClicked = event.target // whatever button we clicked on
            buttonClicked.parentElement.parentElement.remove();
            updateCartTotal();
}

function quantityChange(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName("cart-items")[0];
    const cartRows = cartItemContainer.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName("cart-price")[0];
        const quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        
        const price = parseFloat(priceElement.innerText.replace("$", ""));
        const quantity = parseFloat(quantityElement.value);
        total = total + (price * quantity);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total
}