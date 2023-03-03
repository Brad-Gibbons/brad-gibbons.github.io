function toggleLights() {
    const lightToggle = document.getElementById('body');
    const logoToggle = document.getElementById('bg-logo');
    logoToggle.classList.toggle('dark-mode-logo')
    lightToggle.classList.toggle('dark-mode')
    console.log('test')
}