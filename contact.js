document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="contact"]');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      
      form.reset();
    });
  });