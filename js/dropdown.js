const dropDowns = document.querySelectorAll(".text-select")
dropDowns.forEach((dropDown, index) => {
    dropDown.addEventListener("click", handleOnClickDropDown);
});
function handleOnClickDropDown(e) {
    e.target.parentNode.children[1].classList.toggle("hide");
}

const menus = document.querySelectorAll(".menu-select li");
menus.forEach((menu, index) => {
    menu.addEventListener("click", handleOnClickMenu);
});
function handleOnClickMenu(e) {
    e.target.parentNode.parentNode.classList.toggle("hide");
    var text = e.target.innerText;
    e.target.parentNode.parentNode.parentNode.children[0].children[0].innerText = text;
}