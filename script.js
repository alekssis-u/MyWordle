const container = document.querySelector('.stars-container');
function createStar() {
    const existingStar = document.querySelector('.star');
    if (existingStar) {
        existingStar.remove();
    }
    const star = document.createElement('div');
    star.classList.add('star');
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;
    container.appendChild(star);
    star.style.display = 'block';
    setTimeout(() => {
        star.style.display = 'none';
    }, 3000);
}
setInterval(createStar, 1000);
createStar();
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
openBtn.addEventListener("click", () => {
    modal.classList.add("open");
})
closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})



