// script.js

 
  
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const message = urlParams.get('message');
    
    // Display the submitted data
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = email;
    document.getElementById('message').textContent = message;



 


 
