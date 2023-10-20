

function toggleLights() {
    const lightToggle = document.getElementById('body');
    // const logoToggle = document.getElementById('bg-logo');
    // const cogToggle = document.getElementsByClassName('Path-4');
    const bToggle = document.getElementById('Combined-Shape');
    const gbitToggle = document.getElementById('Path-5');
    const gToggle = document.getElementById('Group-3');
    const cogToggle = document.querySelectorAll("[id='Path-4']");
    const bradGibbonsToggle = document.getElementById('brad-gibbons-digital')
    const icon = document.getElementById('fa-sun');


 
    for(var i = 0; i < cogToggle.length; i++) 
    cogToggle[i].classList.toggle('dark-mode-logo'); // <-- whatever you need to do here.
    bradGibbonsToggle.classList.toggle('dark-mode-logo')
    lightToggle.classList.toggle('dark-mode')
    gToggle.classList.toggle('dark-mode-logo')
    bToggle.classList.toggle('dark-mode-logo')
    gbitToggle.classList.toggle('dark-mode-logo')
    // icon.classList.toggle('toggleIcon')
    // console.log('test')


    const emailToggle = document.getElementById('icon-mail')
    const gitToggle = document.getElementById('icon-git')

    emailToggle.classList.toggle('dark-mode-icon')
    gitToggle.classList.toggle('dark-mode-icon')
}