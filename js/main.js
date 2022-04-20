let main_screen = document.getElementsByClassName("main-screen")[0];

let menu_items = document.getElementsByClassName("menu-item");
for (var i = 0; i < menu_items.length; i++) {
  let contentId = menu_items[i].getAttribute("data-link");
  menu_items[i].addEventListener("click", function (e) {
    e.preventDefault();
    let content = document.getElementById(contentId);
    content.classList.add("appear");
    main_screen.classList.add("hide");
  });
}

let closeButtons = document.getElementsByClassName("exit");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    this.parentElement.classList.remove("appear");
    main_screen.classList.remove("hide");
  });
}
