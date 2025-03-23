const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

const modify = document.querySelector("#modified")
const modified = (document.lastModified);
modify.innerHTML = `${modified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: "1984, October, 19",
        area: 44207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/400x250/Dallas-Texas-Temple14.jpg"
    },
    {
        templeName: "Detroit Michigan",
        location: "Detroit, Michigan",
        dedicated: "1999, October, 23",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/detroit-michigan/400x250/detroit-temple-766397-wallpaper.jpg"
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 1",
        area: 45000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/400x250/guayaquil-ecuador-temple-lds-884500-wallpaper.jpg"
    }

];

createTempleCard(temples);

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
    const myHeading = document.querySelector('.heading1');
    myHeading.innerHTML = 'Old';
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
    const myHeading = document.querySelector('.heading1');
    myHeading.innerHTML = 'New';
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > "90000"));
    const myHeading = document.querySelector('.heading1');
    myHeading.innerHTML = 'Large';
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < "10000"))
    const myHeading = document.querySelector('.heading1');
    myHeading.innerHTML = 'Small';
});

const allLink = document.querySelector("#all");

allLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area));
    const myHeading = document.querySelector('.heading1');
    myHeading.innerHTML = 'Home';
});

function createTempleCard(temples) {
    document.querySelector(".grid1").innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `Location: ${temple.location}`;
        dedication.innerHTML = `Dedication: ${temple.dedicated}`;
        area.innerHTML = `Size: ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".grid1").appendChild(card);
    });
}
