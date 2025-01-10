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

 



 


 
