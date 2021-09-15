// Mobile
// Header
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let exit = document.querySelector('.exit');
let overlay = document.querySelector('.overlay');

navbar.onclick = function() {
    navbar.style.display = 'none';
    navList.style.transform = 'translateX(0)';
    navList.style.opacity = '1';
    exit.style.display = 'block';
    overlay.style.display = 'block';
}

overlay.onclick = () => {
    whileOnClick();
};

exit.onclick = () => {
    whileOnClick();
}

function whileOnClick() {
    navbar.style.display = 'block';
    navList.style.transform = 'translateX(100%)';
    navList.style.opacity = '0';
    exit.style.display = 'none';
    overlay.style.display = 'none';
}

// animation
// let hotline = document.querySelector('.hotline');
// let k = 0.8;
// let effect = setInterval(frame, 3);
// function frame() {
//     if( k >= 1.12 ) {
//         k -= 0.05;
//     }
//     else {
//         k += 0.002
//         hotline.style.transform = 'scale(' + k + ')';
//     }
    
// }
