const btn = document.querySelector(".btn")
const navlinks = document.querySelector(".mobile")
let isopen = false;


btn.addEventListener("click", function () {
    console.log("clicked")
    if (!isopen) {
        navlinks.classList.add("open");
        navlinks.classList.remove("close");
        isopen = true;
    }
    else {
        navlinks.classList.add("close");
        navlinks.classList.remove("open")
        isopen = false
    }
});
