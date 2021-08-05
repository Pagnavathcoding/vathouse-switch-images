let bigImage = document.getElementById("big-image");
let smallImage = document.querySelectorAll(".small-image-switch");
smallImage.forEach((data) => {
    data.addEventListener("click", (event) => {
        let targets = event.currentTarget.classList;
        if (targets.contains("one")) {
            bigImage.classList.add("first");
            bigImage.classList.remove("second");
            bigImage.classList.remove("third");
            bigImage.classList.remove("fourth");
        }
        else if (targets.contains("two")) {
            bigImage.classList.add("second");
            bigImage.classList.remove("first");
            bigImage.classList.remove("third");
            bigImage.classList.remove("fourth");
        }
        else if (targets.contains("three")) {
            bigImage.classList.add("third");
            bigImage.classList.remove("first");
            bigImage.classList.remove("second");
            bigImage.classList.remove("fourth");
        }
        else {
            bigImage.classList.add("fourth");
            bigImage.classList.remove("first");
            bigImage.classList.remove("second");
            bigImage.classList.remove("third");
        }
    })
})