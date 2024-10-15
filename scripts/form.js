// Array de objetos de productos
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
// Función para poblar las opciones del producto
function populateProductOptions() {
    const productSelect = document.getElementById('productName');
    
    // Borrar cualquier opción previa
    productSelect.innerHTML = '<option value="" disabled selected>Select a Product...</option>';
    
    // Agregar cada producto del array como opción en el select
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Utiliza el ID como valor de la opción
        option.textContent = product.name; // Muestra el nombre del producto
        productSelect.appendChild(option);
    });
}


// Llamada a la función cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
});

// Para la ultima fecha modificada
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
document.getElementById('currentYear').textContent = new Date().getFullYear();

