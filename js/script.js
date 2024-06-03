// toggle menu button
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// background 
function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)) {
          video.classList.add('active');
        }
    })
}