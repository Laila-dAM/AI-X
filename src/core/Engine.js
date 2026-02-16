const playBtn = document.getElementById('play-btn')
const aboutBtn = document.getElementById('about-btn')
const aboutPopup = document.getElementById('about-popup')
const closeAbout = document.getElementById('close-about')

playBtn.addEventListener('click', () => {
    window.location.href = '../scenes/forest-scene.html'
})

aboutBtn.addEventListener('click', () => {
    aboutPopup.classList.remove('hidden')
})

closeAbout.addEventListener('click', () => {
    aboutPopup.classList.add('hidden')
})
