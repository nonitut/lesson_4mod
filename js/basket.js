document.addEventListener("DOMContentLoaded", function () {
    function updateCardCount(){
    let card = JSON.parse(localStorage.getItem("card")) || [];
    let totalItems = card.reduce(function(sum, item) {
        return sum + item.quantity;
    }, 0);

    let card_count = document.querySelector(".card_count");
    card_count.textContent = totalItems
    // считает количество товаров в корзине
    }

    function addToCard(id, name, price, image){
        let card = JSON.parse(localStorage.getItem("card")) || [];
        let existingItem = card.find(function(item) {
            return item.id === id;
        });

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            card.push({ id, name, price, image, quantity: 1 });
        }

        localStorage.setItem("card", JSON.stringify(card));
        updateCardCount();
    }

    let addToCardBtn = document.querySelectorAll(".add_to_card");

    addToCardBtn.forEach(function(button) {
        button.addEventListener("click", function(event) {
            let card = event.target.closest(".product_card");
            let id = card.dataset.id;
            let name = card.dataset.name;
            let price = parseInt(card.dataset.price);
            let image = card.dataset.image;

            addToCard(id, name, price, image);
        });
    });

    function loadCard(){
        return JSON.parse(localStorage.getItem("card")) || [];
    };

    function renderCard(){
        let card = loadCard();
        let cardItemsDiv = document.querySelector(".card_items");
        let totalPrice = document.querySelector(".total_price");

        if (card.length === 0){
            cardItemsDiv.innerHTML = "<p>Корзина пуста</p>";
            totalPrice.textContent = "";
            return
        };

        let total = 0;
        let html = "<ul>";

        card.forEach(function(item){
            total += item.price * item.quantity;
            html += `
            <li>
                    <img src="${item.image}" alt="${item.name}" style="width:20%; height:10%">
                    <br>
                    <strong>${item.name}</strong>
                    <br>
                    <div class="card_controls">
                        <button class="minus" data-id="${item.id}" >-</button>
                        <input type="number" value="${item.quantity}" readonly>
                        <button class="plus" data-id="${item.id}">+</button>
                    </div>
                    x ${item.price}₽ = ${item.price * item.quantity}₽
                    <br>
                    <button class="remove" data-id="${item.id}">Удалить</button>
                </li> 
                `
        });
        
        html += "</ul>";
        cardItemsDiv.innerHTML = html;
        totalPrice.textContent = `Итог: ${total}₽`;

        let removeButtons = document.querySelectorAll(".remove");

        removeButtons.forEach(function(button) {
            button.addEventListener("click", function(event){
                let id = button.dataset.id;
                removeItemFromCard(id)
            });
        });

        let plusBtn = document.querySelectorAll(".plus");

        plusBtn.forEach(function(button){
            button.addEventListener("click", function(event){
                let id = button.dataset.id;
                updateCardQuantity(id, 1);
            });
        });

        let minusBtn = document.querySelectorAll(".minus");

        minusBtn.forEach(function(button){
            button.addEventListener("click", function(event){
                let id = button.dataset.id;
                updateCardQuantity(id, -1);
            });
        });
    };

    function removeItemFromCard(id){
        let card = loadCard();
        let updateCard = card.filter(function(item){
            return item.id !== id;
        });
        localStorage.setItem("card", JSON.stringify(updateCard));
        renderCard();
        updateCardCount();
    };

    function updateCardQuantity(id, change) {
        let card = loadCard();
        let item = card.find(function(item){
            return item.id === id;
        });

        if (item){
            item.quantity += change;
            if (item.quantity <= 0){
                removeItemFromCard(id);
                return;
            }

            localStorage.setItem("card", JSON.stringify(card));
            renderCard();
            updateCardCount();
    };
}


    renderCard();
    updateCardQuantity()
    
    // updateItemQuantity();

    let card_button = document.querySelector(".card_button");
    card_button.addEventListener("click", function(){
        let card_sidebar = document.querySelector(".card_sidebar");
        card_sidebar.classList.toggle("show");
    });

    let close_card = document.querySelector(".close_card");
    close_card.addEventListener("click", function() {
        let card_sidebar = document.querySelector(".card_sidebar");
        card_sidebar.classList.remove("show");
    });

});
