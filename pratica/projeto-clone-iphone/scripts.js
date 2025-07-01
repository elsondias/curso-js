const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Remove seleção anterior
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const li = e.currentTarget;
    const id = li.getAttribute("id");

    li.querySelector(".color").classList.add("selected");

    image.classList.toggle("changing");
    image.setAttribute("src", `../img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
