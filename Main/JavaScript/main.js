window.onload = function(){

    const boxes = document.querySelectorAll(".box");
   
    boxes.forEach(box => {
    const name = box.dataset.name;
    box.style.setProperty("background-image", `url(../Images/${name}.webp)`);
    box.addEventListener("mouseover", () => {
        box.style.setProperty("background-image", `url(../Images/${name}_hover.webp)`);
    });
        box.addEventListener("mouseleave", () => {
        box.style.setProperty("background-image", `url(../Images/${name}.webp)`);
    });
})

boxes.forEach(box => {

    box.addEventListener("click",() => {
     const type = box.dataset.type;
    const id = box.dataset.id;

    window.location.href = `info.html?type=${type}&id=${id}`;
    });
 });
}

