document.querySelector(".menu").addEventListener("click", openTest)
function openTest() {
    this.classList.toggle("open");
    document.querySelector(".hide").classList.toggle("development");
    setTimeout(function () {
        document.querySelector(".preview .menu").remove();
    }, 1000);
}