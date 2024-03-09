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
      if(itemQuantity==0){
        alert('Please enter a valid quantity');
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

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
   
  }
  
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // document.getElementById("gps").innerHTML=
  // `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24147.44170610748!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sne!2snp!4v1709747558674!5m2!1sne!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  document.getElementById("gps").innerText="https://www.google.com/maps/@"+latitude+","+longitude+",14z/data=!5m1!1e2?entry=ttu";

}


function whatsapp(){
            
  // var address = document.getElementById("address").value;

  // var name = document.getElementById("name").value;
  // var number = document.getElementById("phonenumber").value;
  // var gps = document.getElementById("address").value;
  // // if(number==""){
  // //     alert("Enter your Phone number");
  // // }
  // // else if(name==""){
  // //     alert("Enter your Name");
  // // }
  // // else if(address==""){
  // //     alert("Please Turn on  Google Map Service");
  // // }
  // // else
  // // {

  //   var name1 = document.getElementById( "name" ).value;
  //   var phonenumber1= document.getElementById("phonenumber").value;
  //   var address1= document.getElementById("address").value;

      
  //     //whatsapp ko lai
  //      var url = "https://wa.me/9779816232444?text="+
  // "----Billing information ----"+"%0a"+
  // "Name :"+name1+"%0a"+
  // "Address :"+address1+"%0a"+
  // "Phone :"+phonenumber1+"%0a"+
  // "Google Map:"+"gps"+"%0a"+
  // "----Take My ORDER ----"+"%0a"+
  // "Selected Dish : "+"%0a"+"cart-items"+"%0a"+
  //  "Quantity : "+"quantity.innerText"+
  //   "%0a"+
  //   "Total : "+" total.innerText" +"%0a";
  // window.open(url);

  var address1 = document.getElementById("address").value;
  var name1 = document.getElementById("name").value;
  var phonenumber1 = document.getElementById("phonenumber").value;
  var cartitem1= document.getElementById("cart-items").innerText;
  var totals1= document.getElementById("total").innerText;
  var gps1 =  document.getElementById("gps").value;
  console.log(gps1);


  var url = "https://wa.me/9779816232444?text="+"----Billing information ----"+"%0a"+"Name :"+name1+"%0a"+"Address :"+address1+"%0a"+
  "Phone :"+phonenumber1+"%0a"+"----Take My ORDER ----"+"%0a"+"Selected Dish : "+"%0a"+cartitem1+"%0a"+totals1+"%0a"+"Delivery location :"+gps1;
 
 if(gps1==""||name1==""||phonenumber1==""){
  alert('Please complete form');
}else{
  window.open(url);
 }
  
}


