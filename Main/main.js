const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    const name = box.dataset.name;
    box.style.setProperty("background-image", `url(images/${name}.webp)`);
    box.addEventListener("mouseover", () => {
        box.style.setProperty("background-image", `url(images/${name}_hover.webp)`);
    });
        box.addEventListener("mouseleave", () => {
        box.style.setProperty("background-image", `url(images/${name}.webp)`);
    });
})