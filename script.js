let cart = [];

const cartCount =
    document.getElementById("cart-count");

const cartItems =
    document.getElementById("cart-items");

const emptyCart =
    document.getElementById("empty-cart");

document
    .querySelectorAll(".add-cart")
    .forEach(button => {

        button.addEventListener("click", () => {

            const product =
                button.closest(".box")
                .dataset.name;

            cart.push(product);

            updateCart();
        });
    });

function updateCart() {

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        emptyCart.style.display = "block";
        return;
    }

    emptyCart.style.display = "none";

    cart.forEach((item, index) => {

        const li =
            document.createElement("li");

        li.innerHTML = `
            <span>${item}</span>
            <button
                class="remove-btn"
                onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(li);
    });
}

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

document
    .getElementById("searchInput")
    .addEventListener("keyup", function () {

        const value =
            this.value.toLowerCase();

        document
            .querySelectorAll(".box")
            .forEach(box => {

                const name =
                    box.dataset.name.toLowerCase();

                box.style.display =
                    name.includes(value)
                        ? "block"
                        : "none";
            });
    });