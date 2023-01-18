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
}

function removeCartItem(event) {
    const buttonClicked = event.target // whatever button we clicked on
            buttonClicked.parentElement.parentElement.remove();
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
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total
}