const container = document.querySelector(".container");
const banner = document.querySelector(".banner");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    // src sebagai plain text pada HTML
    // setTime out untuk mengilangkan class fading setiap 500ms
    banner.src = e.target.src;
    banner.classList.add("fading");
    setTimeout(() => {
      banner.classList.remove("fading");
    }, 500);

    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
