form.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    console.log('Form submitted!'); 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="contact"]');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      

      
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';

      
      alert('Message sent!');
    });
  })});