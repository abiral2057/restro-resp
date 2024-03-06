document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.getElementById('cart-items');
  const clearCartButton = document.getElementById('clear-cart');
  let total = 0;
  let cartProducts = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemName = this.getAttribute('data-name');
      const itemPrice = parseFloat(this.getAttribute('data-price'));
      const itemQuantity = parseInt(this.parentNode.querySelector('.quantity-input').value);
      const itemImage = this.getAttribute('data-image');
      
      // Check if product already exists in cart
      if (cartProducts.includes(itemName)) {
        alert('Product already in cart');
        return;
      }

      total += itemPrice * itemQuantity;
      updateTotal();
      const listItem = document.createElement('li');
      listItem.innerHTML = `<img src="${itemImage}" alt="${itemName}"> ${itemName} - ${itemQuantity} - रु ${(itemPrice * itemQuantity).toFixed(2)}/-`;
      cartItems.appendChild(listItem);
      cartProducts.push(itemName); // Add product to cartProducts array
      
    });
  });

  clearCartButton.addEventListener('click', function() {
    cartItems.innerHTML = '';
    total = 0;
    updateTotal();
    cartProducts = []; // Clear cartProducts array
  });

  function updateTotal() {
    document.getElementById('total').textContent = `Total: रु ${total.toFixed(2)}/-`;
    document.getElementById('total2').textContent = `रु ${total.toFixed(2)}/-`;
  }

  // Increment and Decrement functionality for quantity
  const quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', function() {
      if (parseInt(this.value) <= 0 || isNaN(parseInt(this.value))) {
        this.value = '1';
      }
    });
  });

  const incrementButtons = document.querySelectorAll('.increment');
  incrementButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.parentNode.querySelector('.quantity-input');
      input.value = parseInt(input.value) + 1;
    });
  });

  const decrementButtons = document.querySelectorAll('.decrement');
  decrementButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.parentNode.querySelector('.quantity-input');
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });
  });
});

function openTab(event, tabName) {
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
    
  }

  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}
