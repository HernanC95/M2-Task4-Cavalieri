let eventos = data.events;

function getEvents() {
  return data.events;
}

let container = document.getElementById("container");
function imprimirCartas(carta) {
  let article = document.createElement("article");
  article.innerHTML += ` 
                <article class="d-flex flex-wrap justify-content-center align-items-center text-white border p-2 colorHeader rounded-5">
                <img src="${carta.image}" class="rounded-5 img-details" style="width: 40vw" alt="${carta.name}"></img>
                <div class="d-flex flex-column flex-wrap justify-content-between p-2">    
                    <h1 class="p-2 text-center fw-bold">${carta.name}</h1>
                    <div class="d-flex flex-wrap justify-content-around p-5">
                    <p><span class="fw-bold p-2">Fecha:</span>  ${carta.date}</p>
                    <p><span class="fw-bold p-2">Categoria:</span>  ${carta.category}</p>
                    </div>
                    <p class="text-center w-75 align-self-center">
                    <span class="fw-bold">Description:</span> 
                    ${carta.description}
                    </p>
                    <div class="d-flex flex-wrap justify-content-around p-5">
                      <p><span class="fw-bold p-2">Place:</span>  ${carta.place}</p>
                      <p><span class="fw-bold p-2">Price:</span>  ${carta.price}</p>
                    </div>
                    </div>
                </article>`;

  container.appendChild(article);
}

async function getLocation() {
  let id = Number(location.search.slice(4));
  console.log(id);
  let event = getEvents().filter((evento) => evento._id === id);
  imprimirCartas(event[0]);
}

getLocation();
