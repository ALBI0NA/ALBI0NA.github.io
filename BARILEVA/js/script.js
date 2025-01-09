// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded and ready!');
    
    // Example: Add click event for .ab-card elements
    var cards = document.querySelectorAll('.ab-card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        alert('You clicked on a card!');
      });
    });
  });

 

    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const message = urlParams.get('message');

    // Display the submitted data
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('message').textContent = message;
 
