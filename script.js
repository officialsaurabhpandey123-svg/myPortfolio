function togglemenu(){
    document.getElementById("link").classList.toggle("show");

}


window.onload = function () {

const roles = [
  "Coding Enthusiast",
  "Web Developer",
  "BCA Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const current = roles[roleIndex];
    const element = document.getElementById("changing-text");

    element.textContent = current.substring(0, charIndex);

    if (!isDeleting) {
        charIndex++;
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1200);
            return;
        }
    } else {
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            charIndex = 0;
        }
    }

    setTimeout(typeLoop, isDeleting ? 70 : 120);
}

typeLoop();

};



