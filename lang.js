document.addEventListener('DOMContentLoaded', function() {
  const switchElement = document.querySelector('.switch');
  const checkbox = document.querySelector('#language-toggle');

  const currentPage = window.location.pathname;

  const storedLanguage = localStorage.getItem('language');
  if (storedLanguage === 'greek') {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem('language', 'greek'); // Store selected language
      switchLanguage('greek');
    } else {
      localStorage.setItem('language', 'english'); // Store selected language
      switchLanguage('english');
    }
  });

  function switchLanguage(language) {
    if (language === 'greek') {
      if (currentPage.includes('aboutme.html')) {
        window.location.href = 'aboutmegr.html';
      }
      if (currentPage.includes('projects.html')) {
        window.location.href = 'projectsgr.html';
      }
      if (currentPage.includes('contact.html')) {
        window.location.href = 'contactgr.html';
      }
      if (currentPage.includes('home.html')) {
        window.location.href = 'homegr.html';
      }
    } else {
      if (currentPage.includes('aboutmegr.html')) {
        window.location.href = 'aboutme.html';
      }
      if (currentPage.includes('projectsgr.html')) {
        window.location.href = 'projects.html';
      }
      if (currentPage.includes('contactgr.html')) {
        window.location.href = 'contact.html';
      }
      if (currentPage.includes('homegr.html')) {
        window.location.href = 'home.html';
      }
    }
  }

  if (storedLanguage) {
    switchLanguage(storedLanguage);
  }
});
