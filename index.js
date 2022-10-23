let fechaActual = data.currentDate;
let eventos = data.events;

function getEvents() {
  return data.events;
}
let container = document.getElementById("container");
function imprimirCartas(carta) {
  let article = document.createElement("article");
  article.innerHTML += `    <div class="card h-100" style="width: 18rem">
      <img
        src="${carta.image}"
        class="card-img-top p-2 h-50 rounded-4"
        alt="${carta.name}"
      />
      <div
        class="card-body d-flex flex-column align-items-center justify-content-between"
      >
        <h5 class="card-title">${carta.name}</h5>
        <p class="card-text text-center">${carta.description}</p>
        <div
          class="d-flex w-100 justify-content-between align-items-center"
        >
          <p class="m-0">Price: ${carta.price}</p>
          <a href="details.html?id=${carta._id}" class="btn btn-secondary">Details</a>
        </div>
      </div>
    </div>`;
  container.appendChild(article);
}

getEvents().forEach(imprimirCartas);

const inputSearch = document.getElementById("js-search");

inputSearch.addEventListener("input", filtroCruzado);

function filtrarTexto(array) {
  let aux = array.filter((evento) =>
    evento.name.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  return aux;
}

let check = document.querySelectorAll(".form-check-input");
for (let element of check) {
  element.addEventListener("click", filtroCruzado);
}

function checkbox() {
  let checks = document.querySelectorAll(".form-check-input:checked");
  let filterArray = [];
  checks.forEach((categoria) => {
    let newArray = getEvents().filter(
      (evento) => evento.category === categoria.value
    );
    filterArray = filterArray.concat(newArray);
  });
  if (filterArray.length === 0) {
    filterArray = getEvents();
  }
  return filterArray;
}

function filtroCruzado() {
  let arrayFiltradosPorCheck = checkbox();
  let arraysFiltradosPorTexto = filtrarTexto(arrayFiltradosPorCheck);

  if (arraysFiltradosPorTexto.length === 0) {
    container.innerHTML = `<h2 class="text-white">No se encontraron Eventos</h2>`;
  } else {
    container.innerHTML = ``;
    arraysFiltradosPorTexto.forEach(imprimirCartas);
  }
}
