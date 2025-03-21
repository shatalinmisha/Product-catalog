const cartEl = document.querySelector("#cart");

        function addToCart(text) {
            const liEl = document.createElement('li');
            const spanEl = document.createElement('span');
            spanEl.textContent = text;
            liEl.append(spanEl);
            cartEl.append(liEl); 
        }