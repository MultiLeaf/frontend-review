const buttonOne = document.getElementById("button-one");

// buttonOne.style.color = "purple";
// buttonOne.style.backgroundColor = "black";

buttonOne.classList.add("button-red");
buttonOne.classList.remove("button");

buttonOne.addEventListener("click", ($event) => {
  const buttonTwo = document.getElementById("button-two");
  buttonTwo.style.fontSize = "36px";
});

const menuItems = document.querySelectorAll(".menu-item > a");
menuItems.forEach((element) => {
  element.addEventListener("click", ($event) => {
    $event.preventDefault();

    menuItems.forEach((element) => {
      element.parentElement.classList.remove("active");
    });
    element.parentElement.classList.add("active");
  });
});
