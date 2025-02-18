document.addEventListener('DOMContentLoaded',()=>{
    const products = [
        {id:1,name:"Product 1",price:29.99},
        {id:2,name:"Product 2",price:19.99},
        {id:3,name:"Product 3",price:27}
    ]
    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-btn");
    products.forEach((product)=>{
        console.log(product)
        console.log(productList) 
       const productDiv = document.createElement("div");
       console.log(productDiv);
       productDiv.classList.add('product');
       productDiv.innerHTML = `
       <span>${product.name} -$${product.price.toFixed(2)}</span> <button data-id = ${product.id}>Add to Cart </button>`;
       productList.appendChild(productDiv);
       console.log(`Product list is ${productDiv}`);

    })

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON'){
            console.log("Clicked");
            console.log(typeof e.target.getAttribute('data-id'))
          const productId = parseInt(e.target.getAttribute('data-id'));
          const product = products.find(p =>p.id===productId);
          addToCart(product);
          renderCart();
        }
    })
    function addToCart(product){
        cart.push(product);
        console.log(cart);
    }
    function renderCart(){
        cartItems.innerText = "";
        let totalPrice = 0;
        if(cart.length){
            emptyCart.classList.add('hidden');
            cartTotal.classList.remove('hidden');
            cart.forEach((item,index)=>{
                totalPrice += item.price;
          const cartItem=document.createElement('div');
          cartItem.innerHTML = `${item.name} -${item.price}`;
          cartItems.appendChild(cartItem);
            })
            totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        } else{
            emptyCart.classList.remove('hidden');
        }
    }
    checkoutButton.addEventListener("click",()=>{
        alert("checkout done successfully");
        cart.length = 0;
        totalPriceDisplay.textContent = `$0.00`;
        renderCart();
    })
})
