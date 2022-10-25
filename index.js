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
          <a href="details.html?id=${card.id}" class="btn btn-secondary">Details</a>
        </div>
      </div>
    </div>`;
  container.appendChild(article);
}

const inputSearch = document.getElementById("js-search");

inputSearch.addEventListener("input", fetchApi);

function filterByText(array) {
  let filteredArray = array.filter((event) =>
    event.name.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  return filteredArray;
}

let check = document.querySelectorAll(".form-check-input");
for (let element of check) {
  element.addEventListener("click", fetchApi);
}

function filterByCheckbox(events) {
  let checks = document.querySelectorAll(".form-check-input:checked");
  let filterArray = [];
  checks.forEach((category) => {
    let newArray = events.filter(
      (event) => event.category === category.value
    );
    filterArray = filterArray.concat(newArray);
  });
  if (filterArray.length === 0) {
    filterArray = events;
  }
  return filterArray;
}

function crossFilter(events) {
  let arrayFilterByCheckbox = filterByCheckbox(events);
  let arraysfilterByText = filterByText(arrayFilterByCheckbox);

  if (arraysfilterByText.length === 0) {
    container.innerHTML = `<h2 class="text-white">No events found</h2>`;
  } else {
    container.innerHTML = ``;
    arraysfilterByText.forEach(printCard);
  }
}

async function fetchApi(){
  try {
    let data = await fetch ('https://mh-amazing.herokuapp.com/amazing')
    data = await data.json()
    data.events.forEach(printCard)
    let events=data.events
    console.log(events);
    crossFilter(events)
    
  } catch (error) {
    console.log('Hubo un error');
  }
}

fetchApi()