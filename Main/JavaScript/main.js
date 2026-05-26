let connection = ""; //kollar hur stark internet användaren har, dålig connection = skippa ladda bilder
if (navigator.connection?.effectiveType?.includes("2g") ||
 navigator.connection?.effectiveType?.includes("3g")) {
    console.log("Slow connection detected.");
    connection = "slow";
    console.log(connection);
 } else {
    connection = "strong";
    console.log(connection);
 };

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    if (connection !== "slow") {
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
};

boxes.forEach(box => {

    box.addEventListener("click",() => {
     const type = box.dataset.type;
    const id = box.dataset.id;

    window.location.href = `info.html?type=${type}&id=${id}`;
    });
 });

 const hamburgerBtn = document.getElementById("hamburgerBtn");
 const menu = document.getElementById("menu");
 hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
 });
});
