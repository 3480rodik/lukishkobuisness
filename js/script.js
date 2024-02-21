const items = [
    {
        count: 0,
        image: "images/burger1.webp",
        name: "cheeseburger",
        price: 4.99
    },

    {
        count: 0,
        image: "images/burger2.webp",
        name: "big mac",
        price: 0.80
    },

    {
        count: 0,
        image: "images/burger3.webp",
        name: "chips",
        price: 4.91
    },

    {
        count: 0,
        image: "images/burger4.webp",
        name: "french s",
        price: 4.96
    },

    {
        count: 0,
        image: "images/burger5.webp",
        name: "french s",
        price: 4.96
    },

    {
        count: 0,
        image: "images/burger6.webp",
        name: "french s",
        price: 4.96
    },

    {
        count: 0,
        image: "images/burger4.webp",
        name: "french s",
        price: 4.96
    },

    {
        count: 0,
        image: "images/burger4.webp",
        name: "french s",
        price: 4.96
    },

    {
        count: 0,
        image: "images/burger4.webp",
        name: "french s",
        price: 4.96
    }
];

// const addButton = document.querySelector(".add");
// const minusButton = document.querySelector(".minus");
// const plusButton = document.querySelector(".plus");
// const count = document.querySelector(".count");
const tg = window.Telegram.WebApp;
const main = document.querySelector(".main");

function addItem(object) {
    const divItem = document.createElement("div");
    divItem.classList.add("item")
    divItem.innerHTML = `
        <div class="count hide">${object.count}</div>
        <div class="image">
            <img src="${object.image}" alt="${object.name}">
        </div>
        <div class="text">${object.name} ${object.price}</div>
        <div class="buttons">
            <button class="add">ADD</button>
            <button class="minus hide">-</button>
            <button class="plus hide">+</button>
        </div>
    `;
    return divItem;
}

items.forEach((item) => {
    main.appendChild(addItem(item));
})

document.querySelectorAll(".add").forEach((addButton) => {
    addButton.addEventListener("click", () => {
        addButton.classList.add("hide");
        plusAndMinusButtons = addButton.parentNode.children;  // Array
        console.log(addButton.parentNode.parentNode);
        plusAndMinusButtons[1].classList.remove("hide");
        plusAndMinusButtons[2].classList.remove("hide");
        count = addButton.parentNode.parentNode.querySelector(".count");
        count.textContent = +count.textContent + 1;
        count.classList.remove("hide");
    });
});

document.querySelectorAll(".plus").forEach((plusButton) => {
    plusButton.addEventListener("click", () => {
        count = plusButton.parentNode.parentNode.querySelector(".count");
        count.textContent = +count.textContent + 1;
        if (+count.textContent) {
            count.classList.remove("hide");
        }
    });
});

document.querySelectorAll(".minus").forEach((minusButton) => {
    minusButton.addEventListener("click", () => {
        count = minusButton.parentNode.parentNode.querySelector(".count");
        count.textContent = +count.textContent - 1;
        if (!+count.textContent) {
            addButton = minusButton.parentNode.children[0];
            plusButton = minusButton.parentNode.children[2];

            minusButton.classList.add("hide")
            plusButton.classList.add("hide");
            count.classList.add("hide");
            addButton.classList.remove("hide")
        }
    });
});

document.querySelector(".buy").addEventListener("click", () => {
    tg.sendData(items);
});


// minusButton.addEventListener("click", () => {
//     if (count.textContent == "1") {
//         addButton.classList.remove("hide");
//         minusButton.classList.add("hide");
//         plusButton.classList.add("hide");
//         count.classList.add("hide");
//     } else {
//         count.textContent = +count.textContent - 1;
//     };
// });
