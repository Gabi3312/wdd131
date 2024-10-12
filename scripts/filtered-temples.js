// Para la ultima fecha modificada
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


// Activar o desactivar el menú de navegación haciendo clic en la barra (la hamburguesa)
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        // Alternar entre agregar o quitar la clase 'mostrar' para mostrar u ocultar la navegación
        navLinks.classList.toggle("show");

        // Cambia el botón de la barra a 'X' cuando el menú está abierto
        if (navLinks.classList.contains("show")) {
            hamburger.innerHTML = "&#10005;"; // 'X' symbol
        } else {
            hamburger.innerHTML = "&#9776;"; // simbolo de la barra (la hamburguesa)
        }
    });
});

// agrega los templos automaticamente
const temples = [
    {
      templeName: "Birmingham",
      location: "irmingham, USA",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "Images/birmingham.jpeg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "Images/buenos_aires.jpeg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "Images/cordoba.jpeg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "Images/fortaleza_temple.jpeg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "Images/frankfurt_germany_temple_lds.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "Images/kirtland_temple.jpeg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "Images/provo_city_center_temple_exterior.jpeg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "Images/rome_italy_temple.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "Images/fort_collins_temple_sunset.jpeg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "Images/houston_temple_lds.jpeg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "Images/logan_utah_temple.jpeg"
      }
    
  ];




  function createTempleCard(temple) {
    const card = document.createElement("figure");

    const name = document.createElement("figcaption");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    // Añadir elementos dentro de la tarjeta
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    return card;
}

// Renderizar los templos en la galería
function displayTemples(temples) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = '';

    temples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

displayTemples(temples);