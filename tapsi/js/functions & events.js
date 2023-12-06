//function
function addShadow() {
  this.classList.add("shadow");
}

function removeShadow() {
  this.classList.remove("shadow");
}

function renderCIty() {
  CITIES.forEach((key) => {
    template = `
        <div class="city-div mx-2">
        <p class="mb-1">${key.name}</p>
        <p>${key.englishName}</p>
        </div>
        `;
    root.innerHTML += template;
  });
}

function renderFirstCar(){
  template = `<div class="ps-md-5 ms-md-5 d-md-flex flex-column flex-1">
  <h3 class ="my-4">${CARS[0].title}</h3>
  <p class="lh-lg">${CARS[0].describe}</p>
  </div>
  <div class="d-none d-md-flex flex-1 align-items-center">
  <img src="../img/illus-${CARS[0].Url}.webp" alt="${CARS[0].Url}" class="imging">
  </div>`;
carRoot.innerHTML = template;
imgs[0].classList.add("opacity-1");
}
  
function renderCars() {
  [...imgs].map((img) => {
  img.classList.remove("opacity-1");
  });
  let img = imgs[i];
  img.classList.add("opacity-1");
  
  let car = CARS[i];
  template = `<div class="ps-md-5 ms-md-5 d-md-flex flex-column flex-1">
    <h3 class ="my-4">${car.title}</h3>
    <p class="lh-lg">${car.describe}</p>
    </div>
    <div class="d-none d-md-flex flex-1 align-items-center">
    <img src="../img/illus-${car.Url}.webp" alt="${car.Url}" class="imging">
    </div>`;
  carRoot.innerHTML = template;
  i++;
  if (i === CARS.length) {
  i = 0;
  }
  if (i === CARS.length) clearInterval(interval);
  }

function manualRenderCar(id){
  [...imgs].map((img) => {
    img.classList.remove("opacity-1");
    })
  template = `<div class="ps-md-5 ms-md-5 d-md-flex flex-column flex-1">
                    <h3 class ="my-4">${CARS[id-1].title}</h3>
                    <p class="lh-lg">${CARS[id-1].describe}</p>
                    </div>
                    <div class="d-none d-md-flex flex-1 align-items-center">
                    <img src="../img/illus-${CARS[id-1].Url}.webp" alt="${CARS[id-1].Url}" class="imging">
                    </div>`;
  carRoot.innerHTML = template;
  imgs[id-1].classList.add("opacity-1");
}


//events
renderFirstCar();
renderCIty();


for (const card of cards) {
  card.addEventListener("mouseover", addShadow);
}

for (const card of cards) {
  card.addEventListener("mouseout", removeShadow);
}

let interval = setInterval(renderCars, 3000);

for (const img of serviceimgs) {
  img.addEventListener("click",function(id){
    clearInterval(interval) 
    manualRenderCar(this.id)
  })  
}


