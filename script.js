let shoppingListButtons = document.querySelectorAll(".shopping-list button");

let onClick = (e) => {
  e.target.style.textDecoration = "line-through";
  e.target.style.color = "blue";
  console.log(e.target.innerHTML);
  e.target.removeEventListener("click", onClick);
};

shoppingListButtons.forEach((element) => {
  console.log(element);
  element.addEventListener("click", onClick);
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    console.log("Enter Pressed!");
  }
});

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  console.log("Name: " + data.get("name"));
  console.log("Surname: " + data.get("surname"));
});

document.getElementsByTagName("form")[1].addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  if (data.get("password").length > 5) {
    console.log("Icazə verildi");
  } else {
    console.log("Giris qadagandir!");
  }
});
