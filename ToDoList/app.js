let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

// Add button disabled
input.addEventListener("keyup", () => {
    if (input.value.trim() !== "") {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
});

// Add new item to list
addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        tasks.appendChild(newItem);
        input.value = "";
        addBtn.classList.remove("active"); // assuming you want to remove the 'active' class after adding a new item
    } else {
        alert("Please enter a task.");
    }
});

// Delete item from list and mark item as completed
tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains("fa-pencil")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
    }
});