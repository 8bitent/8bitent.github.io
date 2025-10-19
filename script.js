document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.getElementById('contact-btn');
  const emailDiv = document.getElementById('email');

  if(contactBtn && emailDiv){
    contactBtn.addEventListener('click', () => {
      emailDiv.classList.toggle('visible');
      contactBtn.classList.toggle('active');
    });
  }
});
