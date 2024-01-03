"use strict";


var ShoppingCart = (function($) {
  "use strict";
  
  // Cahce necesarry DOM Elements
  var productsEl = document.querySelector(".products"),
      cartEl = document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");
  
  // Fake JSON data array here should be API call
  var products = [
    {
      id: 0,
      name: "iPhone 13",
      description: "iPhone 13 features a cinema standard wide color gamut, displaying colors just as filmmakers intended.",
      imageUrl: "./img/iphone-13.jpg",
      price: 1199
    },
    {
      id: 1,
      name: "iPhone 13 Pro Max",
      description: "Apple iPhone 13 Pro Max ; CPU, Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard) ; GPU, Apple GPU (5-core graphics) ; Memory, Card slot ; Internal, 128GB 6GB",
      imageUrl: "./img/iphone-pro-max.jpg",
      price: 1999,
    },
    {
      id: 2,
      name: "Macbook Air",
      description: "The M1 chip and macOS Monterey work together to make the entire system snappier. MacBook Air wakes instantly from sleep",
      imageUrl: "./img/macbook-air.jpg",
      price: 1499
    },
    {
      id: 3,
      name: "Macbook",
      description: "The MacBook Air was among the first of Apple's Macs to make the transition to Apple silicon.",
      imageUrl: "./img/macbook.jpg",
      price: 999
    },
    {
      id: 4,
      name: "iPad 11inch",
      description: "The iPad is Apple's most affordable and most popular tablet, and the ninth-generation model features the A13 Bionic chip.",
      imageUrl: "./img/ipad.jpg",
      price: 599
    },
    {
      id: 5,
      name: "iPad Mini",
      description: "iPad is Apple's most affordable and most popular tablet, and the ninth-generation model features the A13 Bionic chip.",
      imageUrl: "./img/ipad-mini.jpg",
      price: 499
    }
  ],
      productsInCart = [];
  
  // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
  var generateProductList = function() {
    products.forEach(function(item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-description"><span>Description:</span> ${item.description}</div>
                             <div class="product-price"><span>Price:</span> ${item.price} $</div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button see-more">More Details</a>
                               <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>
`;
                             
productsEl.appendChild(productEl);
    });
  }
  
  // Like one before and I have also used ES6 template strings
  var generateCartList = function() {
    
    cartEl.innerHTML = "";
    
    productsInCart.forEach(function(item) {
      var li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });
    
    productQuantityEl.innerHTML = productsInCart.length;
    
    generateCartButtons()
  }
  
  
  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  var generateCartButtons = function() {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }
  
  // Setting up listeners for click event on all products and Empty Cart button as well
  var setupListeners = function() {
    productsEl.addEventListener("click", function(event) {
      var el = event.target;
      if(el.classList.contains("add-to-cart")) {
       var elId = el.dataset.id;
       addToCart(elId);
      }
    });
    
    emptyCartEl.addEventListener("click", function(event) {
      if(confirm("Are you sure?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  }
  
  // Adds new items or updates existing one in productsInCart array
  var addToCart = function(id) {
    var obj = products[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }
  
  
  // This function checks if project is already in productsInCart array
  var productFound = function(productId) {
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  var calculateTotalPrice = function() {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }
  
  // This functon starts the whole application
  var init = function() {
    generateProductList();
    setupListeners();
  }
  
  // Exposes just init function to public, everything else is private
  return {
    init: init
  };
  
  // I have included jQuery although I haven't used it
})(jQuery);

ShoppingCart.init();











// (function($){
  
//   $(document).ready(function() {

//     // Initialize Isotope
//     var $container = $('.product-grid');
//     $container.isotope({
//       itemSelector: '.grid-product',
//       layoutMode: 'masonry'
//     });

//     // Setup filtering with dropdowns.
//     var $filterSelects = $('.filter-grid select');
//     var performFilter = function() {
//       var filterVal = ( $(this).val() == '*' ) && '*' || '.'+$(this).val();
//       $container.isotope({ filter: filterVal });
//     };
//     $filterSelects.on( 'change', performFilter );

//     // Add to cart notification.
//     var $addToCart = $('.js-add-to-cart');
//     var performNotification = function() {
//       $('.your-cart').addClass('have-items');
//       $('.notifications').removeClass('fadeOut').addClass('fadeInLeft');
//       setTimeout( function(){
//         $('.notifications').removeClass('fadeInLeft').addClass('fadeOut');
//       }, 3000 );
//     };
//     $addToCart.on( 'click', performNotification );

//     // Cart Slide Down
//     var $cartToggle = $('.js-toggle-cart');
//     var performCartToggle = function() {
//       $('.cart').toggleClass('show-cart');
//     };
//     $cartToggle.on( 'click', performCartToggle );
    
//     /**
//      * Function for manipulating a sibling input of type "number"
//      * from an event fired. Relies on the control for increasing
//      * the number to have a class of .plus. Also requires a min
//      * attribute set on the number to know what not to go below.
//      */
//     var manipulateNumberInput = function(e) {
      
//       e.preventDefault(); // Prevent default action.
      
//       var $numberInput  = $(this).siblings('input[type=number]'),
//           currentValue  = $numberInput.val() != '' && $numberInput.val() || 1,
//           adjustedValue = parseInt( currentValue ) + ($(this).hasClass('plus') && 1 || -1);
      
//       $numberInput.val( adjustedValue ).trigger('change'); // Adjust the number input value, trigger onChange.
      
//     }
    
//     /**
//      * Runs onchange to keep numbers between max/min values.
//      */
//     var validateNumberInput = function(e) {
      
//       var $numberInput = $(this),
//           currentValue = parseInt( $numberInput.val() ),
//           minimumValue = parseInt( $(this).attr('min') ),
//           maximumValue = parseInt( $(this).attr('max') );
      
//       if( currentValue < minimumValue ) $numberInput.val( minimumValue );
//       if( currentValue > maximumValue ) $numberInput.val( maximumValue );
      
//     }
    
//     // Find number controls, attach click events.
//     var $numberControls = $('.js-number-control');
//     $numberControls.on( 'click', manipulateNumberInput );
    
//     // Attach validation listeners.
//     var $numberInputs = $('input[type=number]');
//     $numberInputs.on( 'change', validateNumberInput );

//   }); // Document Ready

// })(jQuery); // Map jQuery => $