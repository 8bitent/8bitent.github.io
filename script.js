window.addEventListener('DOMContentLoaded', () => {
  const contactLink = document.getElementById('contact-link');
  const emailDiv = document.getElementById('email');
  const missionBtn = document.getElementById('mission-btn');
  const cardContent = document.querySelector('.card-content');
  const missionText = document.querySelector('.mission-text');
  let missionVisible = false;
  let typingTimeout = null;
  
  if(contactLink && emailDiv){
    contactLink.addEventListener('click', () => {
      emailDiv.classList.toggle('visible');
    });
  }

  if(missionBtn && cardContent && missionText){
    function typeMission(text, speed = 50) {
      missionText.textContent = '';
      missionText.style.opacity = 1;
      let i = 0;
      function type() {
        if(!missionVisible) return;
        if(i < text.length){
          missionText.textContent += text[i++];
          typingTimeout = setTimeout(type, speed);
        } else {
          missionText.style.animation = 'pulse 1.5s infinite';
        }
      }
      type();
    }

    missionBtn.addEventListener('click', () => {
      missionVisible = !missionVisible;
      clearTimeout(typingTimeout);
      if(missionVisible){
        cardContent.classList.add('hidden');
        missionText.classList.add('visible');
        missionBtn.classList.add('active');
        typeMission("8-Bit Entertainment celebrates the raw...");
      } else {
        cardContent.classList.remove('hidden');
        missionText.classList.remove('visible');
        missionBtn.classList.remove('active');
        missionText.style.opacity = '';
        missionText.textContent = '';
      }
    });
  }
});
