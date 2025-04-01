/* Copyright Year */
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

/* Date Last Modified */
const modify = document.querySelector("#modified");
const modified = (document.lastModified);
modify.innerHTML = `${modified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.getElementById("productName");

products.forEach(product => {
    const optionElement = document.createElement("option");
    optionElement.value = product.id;
    optionElement.textContent = product.name;
    selectElement.appendChild(optionElement);
});


const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first submission. 🥳 Thank you!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);



















