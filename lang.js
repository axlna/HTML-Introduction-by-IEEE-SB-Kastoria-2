document.addEventListener('DOMContentLoaded', function() {
  const switchElement = document.querySelector('.switch');
  const checkbox = document.querySelector('#language-toggle');

  const currentPage = window.location.pathname;

  if (currentPage.includes('aboutmegr.html')) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      if (currentPage.includes('aboutme.html')) {
        window.location.href = 'aboutmegr.html';
      }
    } else {
      if (currentPage.includes('aboutmegr.html')) {
        window.location.href = 'aboutme.html';
      }
    }
  });
});
