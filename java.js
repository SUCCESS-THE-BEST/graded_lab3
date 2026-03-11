let addBtn = document.getElementById("add");
let removeBtn = document.getElementById("remove");
let input = document.getElementById("item");
let list = document.getElementById("list");

let removedCount = 0;

// this is like a container for removed items and counter
let container = document.createElement("div");
removeBtn.after(container);
let removedDisplay = document.createElement("div");
let removedCounter = document.createElement("div");
container.appendChild(removedDisplay);
container.appendChild(removedCounter);

function updateColors() {
    let items = list.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("white", "yellow");
        items[i].classList.add(i % 2 === 0 ? "white" : "yellow"); //i tried to shoten my code by using ? insted of another else statement
    }
}

// Add button
addBtn.addEventListener("click", () => {
    let text = input.value.trim();
    if (!text) return;

    let words = text.split(" ");
    for (let word of words) {
        let li = document.createElement("li");
        li.textContent = word;
        list.appendChild(li); // i used append child because li is inside ul so that is why i did not just use append but rather appendchild
    }

    updateColors();
    input.value = "";
});

// so here is my function for the remove function
removeBtn.addEventListener("click", () => {

    let text = input.value.trim().toLowerCase();
    if (text === "") return;

    let items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {

        if (items[i].textContent.toLowerCase() === text) {

            let removedItem = document.createElement("div");
            removedItem.textContent = items[i].textContent;
            removedItem.classList.add("removed");

            removedDisplay.appendChild(removedItem);

            list.removeChild(items[i]);

            removedCount++;

            removedCounter.textContent = "Items removed: " + removedCount;
            removedCounter.classList.add("removed-count");

            break;
        }
    }

    updateColors();

    input.value = "";
});
