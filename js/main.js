const input = document.querySelector(".input-add");
const addBtn = document.querySelector(".btn-add");
const list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    const itemText = document.createElement("span");
    const btnContainer = document.createElement("div");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    btnContainer.append(checkBtn);
    btnContainer.append(delBtn);
    listItem.append(itemText);
    listItem.append(btnContainer);
    itemText.innerHTML = input.value;
    listItem.classList.add("list__item");
    itemText.classList.add("item__text");
    btnContainer.classList.add("btn-container");
    delBtn.classList.add("btn-del");
    checkBtn.classList.add("btn-checked");
    list.append(listItem)
    input.value = "";

    delBtn.addEventListener("click", () => {
        listItem.remove();
    }) 

    checkBtn.addEventListener("click", () => {
        listItem.classList.toggle("checked");
    })
});
