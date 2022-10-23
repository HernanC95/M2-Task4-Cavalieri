let fechaActual = data.currentDate;

function getEvents() {
  return data.events;
}
let container = document.getElementById("container");
function printCard(card) {
  let article = document.createElement("article");
  article.innerHTML += `    <div class="card h-100" style="width: 18rem">
      <img
        src="${card.image}"
        class="card-img-top p-2 h-50 rounded-4"
        alt="${card.name}"
      />
      <div
        class="card-body d-flex flex-column align-items-center justify-content-between"
      >
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text text-center">${card.description}</p>
        <div
          class="d-flex w-100 justify-content-between align-items-center"
        >
          <p class="m-0">Price: ${card.price}</p>
          <a href="details.html?id=${card._id}" class="btn btn-secondary">Details</a>
        </div>
      </div>
    </div>`;
  container.appendChild(article);
}

getEvents().forEach(printCard);

const inputSearch = document.getElementById("js-search");

inputSearch.addEventListener("input", crossFilter);

function filterByText(array) {
  let filteredArray = array.filter((event) =>
    event.name.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  return filteredArray;
}

let check = document.querySelectorAll(".form-check-input");
for (let element of check) {
  element.addEventListener("click", crossFilter);
}

function filterByCheckbox() {
  let checks = document.querySelectorAll(".form-check-input:checked");
  let filterArray = [];
  checks.forEach((category) => {
    let newArray = getEvents().filter(
      (event) => event.category === category.value
    );
    filterArray = filterArray.concat(newArray);
  });
  if (filterArray.length === 0) {
    filterArray = getEvents();
  }
  return filterArray;
}

function crossFilter() {
  let arrayFilterByCheckbox = filterByCheckbox();
  let arraysfilterByText = filterByText(arrayFilterByCheckbox);

  if (arraysfilterByText.length === 0) {
    container.innerHTML = `<h2 class="text-white">No events found</h2>`;
  } else {
    container.innerHTML = ``;
    arraysfilterByText.forEach(printCard);
  }
}
